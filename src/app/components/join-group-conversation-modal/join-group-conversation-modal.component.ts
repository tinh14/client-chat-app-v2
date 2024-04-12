import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ConversationService } from 'src/app/services/conversation.service';
import { SessionService } from 'src/app/services/session.service';

import { ResponseModel } from 'src/app/models/response.model';
import { ToastService } from '../toast/toast.service';

@Component({
  selector: 'app-join-group-conversation-modal',
  templateUrl: './join-group-conversation-modal.component.html',
  styleUrls: ['./join-group-conversation-modal.component.css']
})
export class JoinGroupConversationModalComponent {
 
  @ViewChild("conversationIdInput") conversationIdInput: ElementRef;

  errorMessage?: string;

  constructor(private ngbActiveModal: NgbActiveModal,
    private toastService: ToastService,
    private conversationService: ConversationService) { }
  
  onJoined(): void {
    const conversationId: string = this.conversationIdInput.nativeElement.value;
    const joinerId: string = SessionService.getCurrentUser().id;

    this.conversationService.joinGroupConversation(conversationId, joinerId).subscribe(
      () => {
        this.onClosed();
        this.toastService.show("Conversation joined successfully", true);
      },
      (error: any) => {
        this.errorMessage = error.error.message;
      }
    )
  }

  onClosed(): void {
    this.ngbActiveModal.close();
  }
}
