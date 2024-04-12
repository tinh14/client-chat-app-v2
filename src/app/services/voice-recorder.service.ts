import { Injectable } from "@angular/core";
import * as RecordRTC from 'recordrtc';

@Injectable({
    providedIn: 'root'
})
export class VoiceRecorderService {
    private stream: MediaStream;
    private recorder: RecordRTC;


    async startRecording() {
        try {
            this.stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
            this.recorder = new RecordRTC(this.stream, { type: 'audio' });
            this.recorder.startRecording();
        } catch (err) {
            alert("DEVICE NOT FOUND");
        }
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