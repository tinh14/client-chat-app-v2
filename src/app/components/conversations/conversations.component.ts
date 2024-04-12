import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { UserProfileModalComponent } from '../user-profile-modal/user-profile-modal.component';
import { JoinGroupConversationModalComponent } from '../join-group-conversation-modal/join-group-conversation-modal.component';
import { GroupConversationModalComponent } from 'src/app/components/group-conversation-modal/group-conversation-modal.component';

import { UserService } from 'src/app/services/user.service';
import { SessionService } from 'src/app/services/session.service';
import { ConversationService } from 'src/app/services/conversation.service';

import { UserModel } from 'src/app/models/user.model';

import { FileUtil } from 'src/app/utils/file-util';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { NGB_MODAL_BACKDROP_STATIC_OPTIONS } from 'src/app/config';
import { ToastService } from '../toast/toast.service';


@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConversationsComponent implements OnInit, OnDestroy {

  currentUser: UserModel;

  currentUserSupscription: Subscription;
  modalConfirmSubscription: Subscription;

  constructor(private ngbModal: NgbModal,
      private userService: UserService,
      private toastService: ToastService,
      private cd: ChangeDetectorRef,
      private conversationService: ConversationService) {}
  
  ngOnInit(): void {
    this.currentUser = SessionService.getCurrentUser();
    this.currentUserSupscription = this.userService.$currentUser.subscribe(
      (user: UserModel) => {
      this.currentUser = user;
      SessionService.setCurrentUser(this.currentUser);
      this.cd.detectChanges();
    });
    this.conversationService.clearCurrentConversation();
  }

  setAvatar(): void {
    this.currentUser.avatarCode = this.currentUser.avatarCode;
  }

  ngOnDestroy(): void {
    this.currentUserSupscription.unsubscribe();
  }

  getAvatar(): string {
    return FileUtil.getURL(this.currentUser.avatarCode);
  }

  onUserProfileModalOpened(): void {
    const modalRef: NgbModalRef = this.ngbModal.open(UserProfileModalComponent, NGB_MODAL_BACKDROP_STATIC_OPTIONS);
    modalRef.componentInstance.user = this.currentUser;
  }

  onCopiedUserId(): void {
    navigator.clipboard.writeText(`${SessionService.getCurrentUser().id}`);
    this.toastService.show('User ID copied', true);
  }

  onJoinGroupConversationModalOpened(): void {
    this.ngbModal.open(JoinGroupConversationModalComponent, NGB_MODAL_BACKDROP_STATIC_OPTIONS);
  }

  onCreateGroupConversationModalOpened(): void {
    const modalRef: NgbModalRef = this.ngbModal.open(GroupConversationModalComponent, NGB_MODAL_BACKDROP_STATIC_OPTIONS);
    modalRef.componentInstance.isCreationMode = true;

  }
}
