import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { MultimediaMessageModel } from 'src/app/models/multimedia-message.model';
import { ResponseModel } from 'src/app/models/response.model';

import { UserModel } from 'src/app/models/user.model';
import { ConversationService } from 'src/app/services/conversation.service';
import { SessionService } from 'src/app/services/session.service';
import { VoiceRecorderService } from 'src/app/services/voice-recorder.service';
import { ToastService } from '../toast/toast.service';

@Component({
  selector: 'app-voice-recorder-modal',
  templateUrl: './voice-recorder-modal.component.html',
  styleUrls: ['./voice-recorder-modal.component.css']
})
export class VoiceRecorderModalComponent{

  isRecording: boolean = false;

  @ViewChild('audioPlayer') audioPlayer: ElementRef;

  audioBob: any;

  constructor(private ngbActiveModal: NgbActiveModal,
    private voiceRecorderService: VoiceRecorderService,
    private toastService: ToastService,
    private conversationService: ConversationService) { }

  onClosed(): void {
    this.ngbActiveModal.close();
  }

  onToggled(): void {
    if (!this.isRecording) {
      this.onStarted();
    } else {
      this.onStopped();
    }
  }

  onStarted(): void {
    this.voiceRecorderService.startRecording();
    this.isRecording = true;
  }


  async onStopped() {
    this.audioBob = await this.voiceRecorderService.stopRecording();
    this.isRecording = false;
    this.audioPlayer.nativeElement.src = URL.createObjectURL(this.audioBob);
  }

  async onSent(): Promise<void> {
    
    const message: MultimediaMessageModel = new MultimediaMessageModel();
    
    message.sender = new UserModel(SessionService.getCurrentUser().id);
    message.sentAt = new Date().toISOString();
    message.conversationId = this.conversationService.currentConversation.id;
    message.fileType = 'AUDIO';

    const file: File = new File([this.audioBob], 'audio.mp3', { type: 'audio/mp3' });
 
    this.conversationService.sendMultimediaMessage(message, file).subscribe(
      (res: ResponseModel) => {
        this.ngbActiveModal.close(res);
        this.onClosed();
      },(error: any) => this.toastService.show(error.error.message, false)
    );
  }
}
