import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, Input, OnDestroy, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ConversationModel } from 'src/app/models/conversation.model';
import { MessageModel } from 'src/app/models/message.model';
import { GroupConversationModalComponent } from '../group-conversation-modal/group-conversation-modal.component';
import { ConversationService } from 'src/app/services/conversation.service';
import { SessionService } from 'src/app/services/session.service';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';
import { VoiceRecorderModalComponent } from '../voice-recorder-modal/voice-recorder-modal.component';
import { NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { switchMap, takeUntil } from 'rxjs/operators';
import { ToastService } from '../toast/toast.service';
import { MessageService } from 'src/app/services/message.service';
import { TextMessageModel } from 'src/app/models/text-message.model';
import { MultimediaMessageModel } from 'src/app/models/multimedia-message.model';
import { GroupConversationModel } from 'src/app/models/group-conversation.model';
import { FileUtil } from 'src/app/utils/file-util';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-conversation-detail',
  templateUrl: './conversation-detail.component.html',
  styleUrls: ['./conversation-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConversationDetailComponent implements OnInit, OnDestroy{

  private conversationSubscription: Subscription;
  private modalConfirmedSubscription: Subscription;

  @ViewChild('fileInput') fileInput: any;
  @ViewChildren('messageElements') messageElements: QueryList<MessageComponent>;
  @ViewChild('chatWindow') chatWindow: ElementRef;

  conversation: ConversationModel;

  page: number = 0;

  private scrollToBottomMode: boolean = true;

  constructor(private activatedRoute: ActivatedRoute, 
    private ngbModal: NgbModal,
    private router: Router,
    private cd: ChangeDetectorRef,
    private toastService: ToastService,
    private conversationService: ConversationService) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const conversationId: string = params.get('id');
        return this.conversationService.findOne(conversationId, SessionService.getCurrentUser().id);
     })
    ).subscribe(() => {
      this.conversationService.markConversationAsRead(this.conversation.id);
    });

    this.conversationSubscription = this.conversationService.curentConversation$.subscribe(
      (conversation: ConversationModel) => {
        this.conversation = conversation;
        this.cd.detectChanges();
      }
    );
    this.conversationService.subscribeMarkNewMessageAsRead();
  }

  ngOnDestroy(): void {
    this.conversationSubscription.unsubscribe();
  }

  onScroll(event: any) {

    this.scrollToBottomMode = event.target.scrollTop === 0;
  
    if (event.target.scrollHeight + event.target.scrollTop === event.target.clientHeight) {
      this.page++;
      this.conversationService.fetchMessages(this.conversation.id, this.page).subscribe();
    }
  }

  getAvatar(): string {
    return FileUtil.getURL(ConversationModel.getAvatarCode(this.conversation));
  }

  getName(): string {
    return ConversationModel.getName(this.conversation);
  }

  activateScrollToBottomMode(): void {
    this.scrollToBottomMode = true;
    this.chatWindow.nativeElement.scrollTop = this.chatWindow.nativeElement.scrollHeight;
    console.log(this.chatWindow.nativeElement.scrollTop);
  }


  isSentMessage(message: MessageModel): boolean {
    return MessageModel.isSentMessage(message);
  }

  isGroupConversation(): boolean {
    return ConversationModel.isGroupConversation(this.conversation);
  }

  openUpdateGroupConversationModal(): void {
    if (ConversationModel.isGroupConversation(this.conversation) && GroupConversationModel.isOwner(this.conversation)) {
      const modalRef: NgbModalRef = this.ngbModal.open(GroupConversationModalComponent);
      modalRef.componentInstance.isCreationMode = false;
    }
  }

  getMessageType(message: MessageModel): string {
    return MessageModel.isTextMessage(message) ? message.instanceOf : (message as MultimediaMessageModel).fileType;
  }

  sendTextMessage(inputElement: HTMLInputElement): void {
    if (inputElement.value.trim() === '') {
      return;
    }
    const message: TextMessageModel = new TextMessageModel();
    message.sender = SessionService.getCurrentUser();
    message.content = inputElement.value;
    message.conversationId = this.conversation.id;

    inputElement.value = '';
    this.scrollToBottomMode = true;

    this.conversationService.sendTextMessage(message);
  }

  onCopyLink(): void {
    navigator.clipboard.writeText(`${this.conversation.id}`);
    this.toastService.show('Group id copied', true);
  }

  onLeaveGroup(): void {
    const modalRef: NgbModalRef = this.ngbModal.open(ConfirmModalComponent);
    this.modalConfirmedSubscription = modalRef.componentInstance.onModalConfirmed()
      .subscribe(
        () => {
          this.conversationService.leaveGroupConversation(this.conversation.id, SessionService.getCurrentUser().id).subscribe(
            () => {
              this.modalConfirmedSubscription.unsubscribe();
              modalRef.close();
              this.router.navigate(['/conversations']);
              this.toastService.show("Conversation left successfully", true);
            },
            (errorRes: any) => this.toastService.show(errorRes.error.message, false)
          );
        }
    );
  }

  onFileChosen(): void {
    this.fileInput.nativeElement.click();
  }

  async onFileSelected(event: any): Promise<void> {

    const selectedFile: File = event.target.files[0];

    if (!selectedFile) {
      return;
    }

    const message: MultimediaMessageModel = new MultimediaMessageModel();

    message.conversationId = this.conversation.id;
    message.sender = SessionService.getCurrentUser();
    message.fileName = selectedFile.name;
    message.conversationId = this.conversation.id;
    message.fileName = selectedFile.name;
    message.fileType = FileUtil.getType(selectedFile);
    this.scrollToBottomMode = true;

    this.conversationService.sendMultimediaMessage(message, selectedFile).subscribe(
      (res: any) => {
        this.toastService.show('File uploaded successfully', true);
      },
      (errorRes: any) => this.toastService.show(errorRes.error.message, false)
    );

    this.fileInput.nativeElement.value = '';
  }

  onVoiceRecorderModalOpened(): void {
    const NGB_MODAL_OPTIONS: NgbModalOptions = {
      backdrop : 'static',
      keyboard : false,
      centered: true,
      size: 'lg'
    };
    this.ngbModal.open(VoiceRecorderModalComponent, NGB_MODAL_OPTIONS);
  }
}
