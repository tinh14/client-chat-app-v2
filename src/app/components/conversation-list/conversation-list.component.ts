import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConversationModel } from 'src/app/models/conversation.model';
import { MessageModel } from 'src/app/models/message.model';
import { ConversationService } from 'src/app/services/conversation.service';
import { SessionService } from 'src/app/services/session.service';
import { FileUtil } from 'src/app/utils/file-util';
import { ToastService } from '../toast/toast.service';
import { TextMessageModel } from 'src/app/models/text-message.model';
import { MultimediaMessageModel } from 'src/app/models/multimedia-message.model';

@Component({
  selector: 'app-conversation-list',
  templateUrl: './conversation-list.component.html',
  styleUrls: ['./conversation-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConversationListComponent implements OnInit, OnDestroy {

  conversations: ConversationModel[] = [];
  filteredConversations: ConversationModel[] = [];

  conversationsSubscription: Subscription;

  constructor(private conversationService: ConversationService,
    private cd: ChangeDetectorRef,
    private toastService: ToastService){
  }

  ngOnInit(): void {
    this.conversationsSubscription = this.conversationService.conversations$
      .subscribe((changedConversations: ConversationModel[]) => {
        this.conversations = changedConversations;
        this.filteredConversations = this.conversations;
        this.cd.detectChanges();
      });

    this.conversationService.findAll(SessionService.getCurrentUser().id).subscribe(
      () => {},
      (error) => {
        this.toastService.show('Conversations loaded failed', false);
      }
    );
  }

  ngOnDestroy(): void {
    this.conversationsSubscription.unsubscribe();
  }

  getAvatar(conversation: ConversationModel): string {
    return FileUtil.getURL(ConversationModel.getAvatarCode(conversation));
  }

  getName(conversation: ConversationModel): string {
    return ConversationModel.getName(conversation);
  }

  getLastestMessage(conversation: ConversationModel): string {
    if (conversation.lastestMessage === null) {
      return '';
    }

    const lastestMessage = conversation.lastestMessage;
    
    // Handle text message

    if (MessageModel.isTextMessage(lastestMessage)) {
      const textMessage: TextMessageModel = lastestMessage as TextMessageModel;
      return `${lastestMessage.sender.name}: ${textMessage.content}`;
    }

    // Handle multimedia message

    let LASTEST_MESSAGE_CONTENT: string = `${lastestMessage.sender.name} has sent`;

    // if (MessageModel.isOtherType(lastestMessage)){
    //   return `${LASTEST_MESSAGE_CONTENT} a file`;
    // }
    
    const multimediaMessage: MultimediaMessageModel = lastestMessage as MultimediaMessageModel;

    return `${lastestMessage.sender.name} has sent a ${multimediaMessage.fileType}`;
  }


  onSearched(value: string): void {
    if (value === ''){
      this.filteredConversations = this.filteredConversations;
      return;
    }

    // this.filteredConversations = this.filteredConversations.filter(conversation => 
    //   conversation.name.toLowerCase().includes(value.toLowerCase()));

  }

  onSelectChanged(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;

    if (selectedValue === 'ALL') {
      this.filteredConversations = this.conversations;
      return;
    }

    if (selectedValue === 'GROUP') {
      this.filteredConversations = this.conversations.filter(conversation => 
        ConversationModel.isGroupConversation(conversation));
        return;
    }

    this.filteredConversations = this.conversations.filter(conversation => 
      !ConversationModel.isGroupConversation(conversation));
  }
}
