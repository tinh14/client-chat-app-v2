import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';

import { SessionService } from 'src/app/services/session.service';
import { ContactService } from 'src/app/services/contact.service';

import { ContactModel } from 'src/app/models/contact.model';

import { FileUtil } from 'src/app/utils/file-util';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NGB_MODAL_BACKDROP_STATIC_OPTIONS } from 'src/app/config';
import { ToastService } from '../toast/toast.service';

@Component({
  selector: 'app-received-contact-requests',
  templateUrl: './received-contact-requests.component.html',
  styleUrls: ['./received-contact-requests.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReceivedContactRequestComponent implements OnInit, OnDestroy {

  private receivedContactRequestsSubscription: Subscription;
  private modalConfirmedSubscription: Subscription;
  
  receivedContactRequests: ContactModel[] = [];
  filteredReceivedContactRequests: ContactModel[] = [];

  constructor(private ngbModal: NgbModal,
    private toastService: ToastService,
    private cd: ChangeDetectorRef,
    private contactService: ContactService) { }

  ngOnInit(): void {
    this.receivedContactRequestsSubscription = this.contactService.receivedContactRequests$
    .subscribe(
      (receivedContactRequests: ContactModel[]) => {
        this.receivedContactRequests = receivedContactRequests;
        this.filteredReceivedContactRequests = this.receivedContactRequests;
        this.cd.detectChanges();
      }
    );
    this.contactService.findReceivedContactRequests(SessionService.getCurrentUser().id).subscribe(
      () => {},
      (error) => this.toastService.show('Received loaded failed', false)
    )
  }

  ngOnDestroy(): void {
    this.receivedContactRequestsSubscription.unsubscribe();
  }

  getAvatar(contact: ContactModel): string {
    return FileUtil.getURL(contact.sender.avatarCode);
  }

  onSearched(value: string): void {
    if (value === null){
      this.filteredReceivedContactRequests = this.receivedContactRequests;
      return;
    }

    const foundReceivedContactRequests: ContactModel[] = this.receivedContactRequests.filter(contact => {
      return contact.sender.name.toLowerCase().includes(value.toLowerCase());
    });

    this.filteredReceivedContactRequests = foundReceivedContactRequests;
  }

  onAccepted(receivedContactRequest: ContactModel): void {
    const modalRef: NgbModalRef = this.ngbModal.open(ConfirmModalComponent, NGB_MODAL_BACKDROP_STATIC_OPTIONS);
    this.modalConfirmedSubscription = modalRef.componentInstance.onModalConfirmed()
      .subscribe(
        () => {
          this.contactService.acceptRequest(receivedContactRequest.id).subscribe(
            () => {
              this.toastService.show('Contact request accepted', true);
            },
            (error) => console.log(error)
          );
          this.modalConfirmedSubscription.unsubscribe();
          modalRef.close();
        }
      );
  }

  onDeclined(receivedContactRequest: ContactModel): void {
    const modalRef: NgbModalRef = this.ngbModal.open(ConfirmModalComponent, NGB_MODAL_BACKDROP_STATIC_OPTIONS);
    this.modalConfirmedSubscription = modalRef.componentInstance.onModalConfirmed()
      .subscribe(
        () => {
          this.contactService.declineRequest(receivedContactRequest.id).subscribe(
            () => {
              this.toastService.show('Contact request declined', true);
            },
            (errorRes: any) => this.toastService.show(errorRes.error.message, false)
          );
          this.modalConfirmedSubscription.unsubscribe();
          modalRef.close();
        }
      );
  }
}
