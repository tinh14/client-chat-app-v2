import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ConversationService } from 'src/app/services/conversation.service';
import { SessionService } from 'src/app/services/session.service';

import { UserModel } from 'src/app/models/user.model';

import { FileUtil } from 'src/app/utils/file-util';
import { GroupConversationModel } from 'src/app/models/group-conversation.model';
import { ToastService } from '../toast/toast.service';
import { ConversationModel } from 'src/app/models/conversation.model';

@Component({
  selector: 'app-group-conversation-modal',
  templateUrl: './group-conversation-modal.component.html',
  styleUrls: ['./group-conversation-modal.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupConversationModalComponent implements OnInit, AfterViewInit  {

  @Input() isCreationMode: boolean;

  conversation?: GroupConversationModel = new GroupConversationModel();

  @ViewChild('avatarInput') avatarInput!: ElementRef;
  @ViewChild('avatarImage') avatarImage!: ElementRef;
  @ViewChild('nameInput') nameInput!: ElementRef;

  loading = false;
  title: string;
  errorMessage?: string;

  constructor(private ngbActiveModal: NgbActiveModal,
    private conversationService: ConversationService,
    private cd: ChangeDetectorRef,
    private toastService: ToastService){
  }

  ngOnInit(): void {
    

  }

  ngAfterViewInit(): void {
    if (!this.isCreationMode) {
      this.title = "Update group conversation";
      this.conversation = this.conversationService.currentConversation as GroupConversationModel;
      this.avatarImage.nativeElement.src = FileUtil.getURL(this.conversation.avatarCode);
      this.cd.detectChanges();
      return;
    }

    this.title = "Create group conversation";
    this.cd.detectChanges();
  }

  getName(): string {
    return ConversationModel.getName(this.conversation);
  }

  async onFileChanged(event: any): Promise<void> {
    const file: File = event.target.files[0];
    if (file) {
      const fileReader: FileReader = new FileReader();
      fileReader.onload = (e) => {
        this.avatarImage.nativeElement.src = e.target?.result as string;
        this.cd.detectChanges();
      }
      fileReader.readAsDataURL(file);
    }
  }

  onFileChosen(): void {
    this.avatarInput.nativeElement.click();
  }

  async onSaved():Promise<void> {
    this.loading = true;

    const clonedConversation: GroupConversationModel = new GroupConversationModel();

    clonedConversation.name = this.nameInput.nativeElement.value;

    let avatar: File;

    if (this.avatarInput.nativeElement.files.length > 0){
      avatar = this.avatarInput.nativeElement.files[0];
    }

    if (this.isCreationMode) {
      this.onCreated(clonedConversation, avatar)
      return;
    }
    
    clonedConversation.id = this.conversation.id;
    this.onUpdated(clonedConversation, avatar);
    
  }

  onCreated(clonedConversation: GroupConversationModel, avatar: File): void {
    const CURRENT_USER: UserModel = SessionService.getCurrentUser();
    clonedConversation.ownerId = CURRENT_USER.id;

    this.conversationService.createGroupConversation(clonedConversation, avatar).subscribe(
      () => {
        this.toastService.show('Group conversation created', true);
        this.onClosed();
      },
      (errorResponse: any) => {
        this.loading = false;
        this.errorMessage = errorResponse.error.message;
        this.cd.detectChanges();
      }
    );
  }

  onUpdated(clonedConversation: GroupConversationModel, file: File): void {
    this.conversationService.updateGroupConversation(clonedConversation, file).subscribe(
      () => {
        this.toastService.show('Group conversation updated', true);
        this.onClosed();
      },
      (errorResponse: any) => {
        this.loading = false;
        this.errorMessage = errorResponse.error.message;
        this.cd.detectChanges();
      }
    );

  }

  onClosed(): void {
    this.ngbActiveModal.close();
  }
}