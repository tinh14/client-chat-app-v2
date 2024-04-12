import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { ContactModel } from 'src/app/models/contact.model';
import { Subscription } from 'rxjs';
import { SessionService } from 'src/app/services/session.service';
import { ContactService } from 'src/app/services/contact.service';
import { UserModel } from 'src/app/models/user.model';
import { FileUtil } from 'src/app/utils/file-util';
import { NgbModal, NgbModalRef  } from '@ng-bootstrap/ng-bootstrap';
import { NGB_MODAL_BACKDROP_STATIC_OPTIONS } from 'src/app/config';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsComponent implements OnInit, OnDestroy {

  private contactsSubscription: Subscription;
  private modalConfirmedSubscription: Subscription;
  
  contacts: ContactModel[] = [];
  filteredContacts: ContactModel[] = [];

  constructor(private ngbModal: NgbModal,
    private router: Router,
    private toastService: ToastService,
    private cd: ChangeDetectorRef,
    private contactService: ContactService) { }

  ngOnInit(): void {

    this.contactsSubscription = this.contactService.contacts$.subscribe(
      (contacts: ContactModel[]) => {
        this.contacts = contacts;
        this.filteredContacts = contacts;
        this.cd.detectChanges();
      }
    );

    this.contactService.findContacts(SessionService.getCurrentUser().id).subscribe(
      () => {},
      (error) => {
        this.toastService.show('Contacts loaded failed', false);
      }
    );
  }

  ngOnDestroy(): void {
    this.contactsSubscription.unsubscribe();
  }

  onSearched(value: string): void {
    if (value === null){
      this.filteredContacts = this.contacts;
      return;
    }

    const foundContacts: ContactModel[] = this.contacts.filter(contact => {
      const lowercaseValue = value.toLowerCase();
      const CURRENT_USER = SessionService.getCurrentUser();
      
      const foundName: string = (contact.sender.id === CURRENT_USER.id) ? contact.receiver.name : contact.sender.name;

      return foundName.toLowerCase().includes(lowercaseValue);
    });

    this.filteredContacts = foundContacts;
  }

  getAvatar(contact: ContactModel): string {
    const CURRENT_USER: UserModel = SessionService.getCurrentUser();
    const user: UserModel = (CURRENT_USER.id === contact.sender.id) ? contact.receiver : contact.sender;
    return FileUtil.getURL(user.avatarCode);
  }

  getContactName(contact: ContactModel): string {
    const CURRENT_USER: UserModel = SessionService.getCurrentUser();
    return (CURRENT_USER.id === contact.sender.id) ? contact.receiver.name : contact.sender.name;
  }

  onClicked(contact: ContactModel): void {
    this.router.navigate(['/conversations', contact.conversationId]);
  }

  onDeleted(event: Event, contact: ContactModel): void {
    event.stopPropagation();
    const modalRef: NgbModalRef = this.ngbModal.open(ConfirmModalComponent, NGB_MODAL_BACKDROP_STATIC_OPTIONS);
    this.modalConfirmedSubscription = modalRef.componentInstance.onModalConfirmed()
      .subscribe(
        () => {
          this.contactService.deleteContact(contact.id).subscribe(
            () => {
              this.toastService.show('Contact deleted successfully', true);
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
