import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { SessionService } from 'src/app/services/session.service';
import { ContactService } from 'src/app/services/contact.service';

import { ContactModel } from 'src/app/models/contact.model';

import { FileUtil } from 'src/app/utils/file-util';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from '../toast/toast.service';

@Component({
  selector: 'app-sent-contact-requests',
  templateUrl: './sent-contact-requests.component.html',
  styleUrls: ['./sent-contact-requests.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SentContactRequestComponent implements OnInit, OnDestroy {

  private sentContactRequestsSubscription: Subscription;
  private modalConfirmedSubscription: Subscription;

  sentContactRequests: ContactModel[] = [];
  filteredSentContactRequests: ContactModel[] = [];

  constructor(private ngbModal: NgbModal,
    private toastService: ToastService,
    private cd: ChangeDetectorRef,
    private contactService: ContactService) { }

  ngOnInit(): void {
    this.sentContactRequestsSubscription = this.contactService.sentContactRequests$.subscribe(
      (sentContactRequests: ContactModel[]) => {
        this.sentContactRequests = sentContactRequests;
        this.filteredSentContactRequests = this.sentContactRequests;
        this.cd.detectChanges();
      }
    );
    this.contactService.findSentContactRequests(SessionService.getCurrentUser().id).subscribe(
      () => {},
      (error) => this.toastService.show('Sent contacts loaded failed', false)
    );
  }

  ngOnDestroy(): void {
    this.sentContactRequestsSubscription.unsubscribe();
  }

  getAvatar(contact: ContactModel): string {
    return FileUtil.getURL(contact.receiver.avatarCode);
  }

  onSearched(value?: string): void {
    if (value === null){
      this.filteredSentContactRequests = this.sentContactRequests;
      return;
    }

    const foundSentContactRequests: ContactModel[] = this.sentContactRequests.filter(contact => {
      return contact.receiver.name.toLowerCase().includes(value.toLowerCase());
    });

    this.filteredSentContactRequests = foundSentContactRequests;
  }

  onDeleted(sentContactRequest: ContactModel): void {
    const modalRef: NgbModalRef = this.ngbModal.open(ConfirmModalComponent);
    this.modalConfirmedSubscription = modalRef.componentInstance.onModalConfirmed()
      .subscribe(
        () => {
          this.contactService.deleteSentRequest(sentContactRequest.id).subscribe(
            () => {
              this.toastService.show('Contact request deleted', true);
            },
            (errorRes: any) => {
              this.toastService.show(errorRes.error.message, false);
            }
          );
          this.modalConfirmedSubscription.unsubscribe();
          modalRef.close();  
        }
      );
  }
}
