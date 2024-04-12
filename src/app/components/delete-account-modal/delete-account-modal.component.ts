import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteAccountRequest } from 'src/app/requests/delete-account.request';
import { AuthService } from 'src/app/services/auth.service';
import { SessionService } from 'src/app/services/session.service';
import { ToastService } from '../toast/toast.service';

@Component({
  selector: 'app-delete-account-modal',
  templateUrl: './delete-account-modal.component.html',
  styleUrls: ['./delete-account-modal.component.css']
})
export class DeleteAccountModalComponent{

  @ViewChild('passwordInput') passwordInput!: ElementRef;

  loading: boolean = false;
  errorMessage?: string;

  constructor(private ngbActiveModal: NgbActiveModal,
    private router: Router,
    private toastService: ToastService,
    private authService: AuthService) { }


  onDelete(): void {
    this.loading = true;
    const request: DeleteAccountRequest = new DeleteAccountRequest();
    request.userId = SessionService.getCurrentUser().id;
    request.password = this.passwordInput.nativeElement.value;

    this.authService.deleteAccount(request).subscribe(
      () => {
        this.onClosed();
        this.toastService.show('Account deleted successfully', true);
        this.router.navigate(['/auth/signin']);
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
