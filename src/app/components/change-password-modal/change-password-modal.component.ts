import { Component } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { SessionService } from 'src/app/services/session.service';
import { AuthService } from 'src/app/services/auth.service';

import { ChangePasswordRequest } from 'src/app/requests/change-password.request';

@Component({
  selector: 'app-change-password-modal',
  templateUrl: './change-password-modal.component.html',
  styleUrls: ['./change-password-modal.component.css']
})
export class ChangePasswordModalComponent {

  changePasswordRequest?: ChangePasswordRequest = new ChangePasswordRequest();

  loading: boolean = false;
  errorMessage?: string;

  constructor(private ngbActiveModal: NgbActiveModal,
    private authService: AuthService){}

  onSaved(): void {
    this.loading = true;
    this.changePasswordRequest.userId = SessionService.getCurrentUser().id;
    this.authService.changePassword(this.changePasswordRequest).subscribe(
      () => {
        this.onClosed();
      },
      (errorRes: any) => {
        this.loading = false;
        this.errorMessage = errorRes.error.message;
      }
    );
  }

  onClosed(): void {
    this.ngbActiveModal.close();
  }
}
