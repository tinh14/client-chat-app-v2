import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import { ViewModalComponent } from '../view-modal/view-modal.component';

import { ConversationModel } from 'src/app/models/conversation.model';
import { MessageModel } from 'src/app/models/message.model';

import { NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { GroupConversationModel } from 'src/app/models/group-conversation.model';
import { FileUtil } from 'src/app/utils/file-util';
import { MultimediaMessageModel } from 'src/app/models/multimedia-message.model';
import { Subscription } from 'rxjs';
import { ConversationService } from 'src/app/services/conversation.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageComponent implements OnInit, OnDestroy, AfterViewInit {

  @Input() messageType: string;

  @Input() message: MessageModel;

  @Input() currentMessage: MessageModel;

  @Input() conversation: ConversationModel;

  @ViewChild('progressbarWrapper') progressbarWrapper: ElementRef;
  @ViewChild('progressbar') progressbar: ElementRef;
  @ViewChild('content') contentElement: ElementRef;

  private fileUploadedSubscription: Subscription;

  progress: number = 0;

  constructor(private ngbModal: NgbModal,
    private conversationService: ConversationService,
    private cd: ChangeDetectorRef) { }
  

  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
    this.fileUploadedSubscription = this.conversationService.fileUploaded$.subscribe(
      (res: number) => {
        this.progress = res;
        this.updateProgress(this.progress);
      }
    );
  }

  updateProgress(progress: number): void {
    this.progress = progress;
    if (this.progress === 100) {
      this.progressbarWrapper.nativeElement.classList.add('d-none');
      this.progress = 0;
    }else {
      if (this.progressbarWrapper.nativeElement.classList.contains('d-none')) {
        this.progressbarWrapper.nativeElement.classList.remove('d-none');
      }
      this.progressbar.nativeElement.style.width = this.progress + '%';
      this.progressbar.nativeElement.innerHTML = this.progress + '%';
    }
  }

  ngOnDestroy(): void {
    this.fileUploadedSubscription.unsubscribe();
  }

  getAvatar(): string {
    return FileUtil.getURL(this.message.sender.avatarCode);
  }

  isSentMessage(): boolean {
    return MessageModel.isSentMessage(this.message);
  }

  isOwner(): boolean {
    if (ConversationModel.isGroupConversation(this.conversation) && GroupConversationModel.isOwner(this.conversation)){
      return this.message.sender.id === (this.conversation as GroupConversationModel).ownerId;
    }
  }

  getInlineData(): string {
    if (!MessageModel.isTextMessage(this.message)) {
      const multimediaMessage: MultimediaMessageModel = this.message as MultimediaMessageModel;
      return FileUtil.getURL(multimediaMessage.fileCode);
    }
  }

  getAttachmentData(): string {
    if (!MessageModel.isTextMessage(this.message)) {
      const multimediaMessage: MultimediaMessageModel = this.message as MultimediaMessageModel;
      return FileUtil.getAttachment(multimediaMessage.fileCode);
    }
  }

  onViewModalOpened(): void {
    const NGB_MODAL_OPTIONS: NgbModalOptions = {
      backdrop : 'static',
      keyboard : false,
      size: 'fullscreen'
    }
    const modalRef: NgbModalRef = this.ngbModal.open(ViewModalComponent, NGB_MODAL_OPTIONS);
    modalRef.componentInstance.message = this.message;
  }
}
