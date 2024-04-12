import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { ContactService } from 'src/app/services/contact.service';
import { UserService } from 'src/app/services/user.service';
import { SessionService } from 'src/app/services/session.service';

import { ResponseModel } from 'src/app/models/response.model';
import { ContactModel } from 'src/app/models/contact.model';
import { UserModel } from 'src/app/models/user.model';

import { FileUtil } from 'src/app/utils/file-util';
import { ToastService } from '../toast/toast.service';

@Component({
  selector: 'app-find-contact-modal',
  templateUrl: './find-contact-modal.component.html',
  styleUrls: ['./find-contact-modal.component.css'],
})
export class FindContactModelComponent {

  disabled: boolean;

  foundUser?: UserModel;
  
  errorMessage?: string;

  constructor(private ngbActiveModal: NgbActiveModal,
    private contactService: ContactService,
    private toastService: ToastService,
    private userService: UserService){}
  
  getAvatar(): string {
    return FileUtil.getURL(this.foundUser.avatarCode);
  }

  onUserFound(value: string): void {
    const userId: string = value;
    
    if (userId == SessionService.getCurrentUser().id){
      this.disabled = true;
      this.foundUser = SessionService.getCurrentUser();
      return;
    }

    this.disabled = false;
    this.userService.findOne(userId).subscribe(
      (res: ResponseModel) => {
        this.foundUser = res.data;
        this.errorMessage = "";
      },
      (errorRes) => {
        this.foundUser = null;
        this.errorMessage = errorRes.error.message;
      }
    );
  }

  onSent(): void {

    if (!this.foundUser) {
      this.errorMessage = "User not found";
      return;
    }

    const contact: ContactModel = new ContactModel();
    const sender: UserModel = new UserModel(SessionService.getCurrentUser().id);
    const receiver: UserModel = new UserModel(this.foundUser.id);

    contact.sender = sender;
    contact.receiver = receiver;

    this.contactService.sendRequest(contact).subscribe(
      () => {
        this.toastService.show('Contact request sent', true);
        this.ngbActiveModal.close();
      },
      (errorRes) => {
        this.errorMessage = errorRes.error.message;
      }
    );
  }

  onClosed(): void {
    this.ngbActiveModal.close();
  }

}
