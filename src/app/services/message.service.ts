import { Injectable } from "@angular/core";
import { MessageModel } from "../models/message.model";
import { StompService } from "./stomp.service";
import { API_BASE_URL } from "../config";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { ResponseModel } from "../models/response.model";

@Injectable({
    providedIn: 'root'
})
export class MessageService {
  
    private TEXT_MESSAGE_DESTIONATION: string = "/app/conversations/{0}/textMessages";
    private MULTIMEDIA_MESSAGE_DESTIONATION: string = "/app/conversations/{0}/multimediaMessages";
    private MULTIMEDIA_MESSAGE_BASE_URL: string = `${API_BASE_URL}/multimediaMessages`;
    
    constructor(private stompService: StompService,
        private http: HttpClient) { }

    
    sendTextMessage(message: MessageModel): void {
      const destination: string = this.TEXT_MESSAGE_DESTIONATION.replace("{0}", message.conversationId);
      this.stompService.publish(destination, message);
    }

    sendMultimediaMessage(message: MessageModel, file: File): Observable<ResponseModel> {
        const formData: FormData = new FormData();
        formData.append('file', file);

        formData.append('message', new Blob([JSON
            .stringify(message)], {
            type: 'application/json'
        }));
        return this.http.post<ResponseModel>(this.MULTIMEDIA_MESSAGE_BASE_URL, formData);
    }

}
  