import { Injectable } from "@angular/core";
import * as RecordRTC from 'recordrtc';

@Injectable({
    providedIn: 'root'
})
export class VoiceCallService {
    private stream: MediaStream;
    private recorder: RecordRTC;

    async startRecording() {
        this.stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
        this.recorder = new RecordRTC(this.stream, { type: 'video' });
        this.recorder.startRecording();
        this.recorder.ondataavailable = (blob) => {
            const reader = new FileReader();
      
            reader.onload = () => {
              const arrayBuffer = reader.result.toString();
            //   const base64String = btoa(arrayBuffer);
                console.log(arrayBuffer);
              
            };
      
            reader.readAsDataURL(blob);
          };
    }

    async stopRecording() {
        return new Promise((resolve) => {
            this.recorder.stopRecording(() => {
                let blob = this.recorder.getBlob();
                resolve(blob);

                // free up resources
                this.recorder.destroy();
                this.recorder = null;

                // stop media stream
                this.stream.getAudioTracks().forEach(track => track.stop());
                this.stream = null;
            });
        });
    }
}