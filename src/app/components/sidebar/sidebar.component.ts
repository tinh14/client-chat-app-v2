import { Component, OnInit } from '@angular/core';
import { ChangePasswordModalComponent } from '../change-password-modal/change-password-modal.component';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';
import { NGB_MODAL_BACKDROP_STATIC_OPTIONS } from 'src/app/config';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { DeleteAccountModalComponent } from '../delete-account-modal/delete-account-modal.component';
import { ToastService } from '../toast/toast.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  
  private modalConfirmSubscription: Subscription;

  constructor(private ngbModal: NgbModal,
    private router: Router,
    private toastService: ToastService,
    private authService: AuthService) {}

  onChangePasswordModalOpened(): void {
    this.ngbModal.open(ChangePasswordModalComponent, NGB_MODAL_BACKDROP_STATIC_OPTIONS);
  }

  onSignedOut(): void {
    const modalRef: NgbModalRef = this.ngbModal.open(ConfirmModalComponent, NGB_MODAL_BACKDROP_STATIC_OPTIONS);
    this.modalConfirmSubscription = modalRef.componentInstance.onModalConfirmed().subscribe(() => {
      modalRef.close();
      this.modalConfirmSubscription.unsubscribe();
      this.authService.signOut();
      this.toastService.show('Signed out successfully', true);
      this.router.navigate(['/auth/signin']);
    });
  }

  onDeleteAccountModalOpened(): void {
    this.ngbModal.open(DeleteAccountModalComponent, NGB_MODAL_BACKDROP_STATIC_OPTIONS);
  }
}
