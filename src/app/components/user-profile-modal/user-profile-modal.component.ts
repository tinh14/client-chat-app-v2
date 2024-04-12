import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { UserService } from 'src/app/services/user.service';

import { UserModel } from 'src/app/models/user.model';

import { FileUtil } from 'src/app/utils/file-util';
import { ToastService } from '../toast/toast.service';

@Component({
  selector: 'app-user-profile-modal',
  templateUrl: './user-profile-modal.component.html',
  styleUrls: ['./user-profile-modal.component.css'],
})
export class UserProfileModalComponent {

  @Input() user: UserModel;

  @ViewChild('avatarInput') avatarInputRef!: ElementRef;
  @ViewChild('avatarImage') avatarImageRef!: ElementRef;
  @ViewChild('name') nameRef!: ElementRef;

  newAvatarUrl: string | ArrayBuffer | null = null;
  
  loading: boolean = false;
  errorMessage?: string;

  constructor(private ngbActiveModal: NgbActiveModal,
    private toastService: ToastService,
    private userService: UserService){}
  
  getAvatar(): string {
    return FileUtil.getURL(this.user.avatarCode);
  }

  async onFileChanged(event: any): Promise<void> {
    const file: File = event.target.files[0];
    if (file) {
      const fileReader: FileReader = new FileReader();
      fileReader.onload = (e) => {
        this.newAvatarUrl = e.target?.result;
      }
      fileReader.readAsDataURL(file);
    }
  }

  onFileChosen(): void {
    this.avatarInputRef.nativeElement.click();
  }

  async onSaved(): Promise<void> {
    this.loading = true;

    const clonedUser: UserModel = new UserModel(this.user.id);
    clonedUser.name = this.nameRef.nativeElement.value;
    
    let avatar: File = null;

    if (this.avatarInputRef.nativeElement.files.length > 0) {
      avatar = this.avatarInputRef.nativeElement.files[0];
    }

    this.userService.save(clonedUser, avatar).subscribe(
      () => {
        this.toastService.show('User profile updated', true);
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
