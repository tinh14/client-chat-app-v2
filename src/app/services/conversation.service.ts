import { HttpClient, HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

import { API_BASE_URL, WEB_SOCKET_PRIVATE_ENDPOINT, WEB_SOCKET_PUBLIC_ENDPOINT, HEADER } 
from '../config';

import { SessionService } from './session.service';
import { StompService } from './stomp.service';

import { ConversationModel } from '../models/conversation.model';
import { MessageModel } from '../models/message.model';
import { MessageReadStatusModel } from '../models/message-read-status.model';
import { ResponseModel } from '../models/response.model';
import { ObservableUtil } from '../utils/observable.util';
import { ToastService } from '../components/toast/toast.service';
import { GroupConversationModel } from '../models/group-conversation.model';
import { FileFetcherService } from './file-fetcher.service';

@Injectable({
  providedIn: 'root'
})
export class ConversationService {

    private CONVERSATIONS_BASE_URL: string = `${API_BASE_URL}/conversations`;
    private GROUP_CONVERSATION_BASE_URL = `${API_BASE_URL}/groupConversations`;
    private MESSAGE_READ_STATUS_BASE_URL = `${API_BASE_URL}/messageNotifications`;
    private MULTIMEDIA_MESSAGE_BASE_URL: string = `${API_BASE_URL}/multimediaMessages`;
    
    private conversationsSubject: Subject<ConversationModel[]> = 
        new Subject<ConversationModel[]>();
    conversations$ = this.conversationsSubject.asObservable();

    private currentConversationSubject: Subject<ConversationModel> = 
        new Subject<ConversationModel>();
    curentConversation$ = this.currentConversationSubject.asObservable();

    private messageReadStatusesSubject: Subject<Map<string, MessageReadStatusModel>> = 
        new Subject<Map<string, MessageReadStatusModel>>();
    messageReadStatuses$ = this.messageReadStatusesSubject.asObservable();

    private newMessageSubject: Subject<void> = new Subject<void>();
    newMessage$ = this.newMessageSubject.asObservable();

    private fileUploadedSubject: Subject<number> = new Subject<number>();
    fileUploaded$ = this.fileUploadedSubject.asObservable();

    conversations: ConversationModel[] = [];
    currentConversation?: ConversationModel;
    messageReadStatuses: Map<string, MessageReadStatusModel> = new Map();
    
    constructor(private http: HttpClient, 
        private toastService: ToastService,
        private fileFetcherService: FileFetcherService,
        private stompService: StompService) {}

    clearCurrentConversation(): void {
        this.currentConversation = undefined;
        this.currentConversationSubject.next(this.currentConversation);
    }

    findAll(participantId: string): Observable<ResponseModel>{
        const url: string = `${this.CONVERSATIONS_BASE_URL}/participants/${participantId}`;

        return this.http.get<ResponseModel>(url).pipe(
            tap((res: ResponseModel) => {
                this.conversations = res.data;
                this.conversations.forEach(con => {
                    this.subsribeConversationChannel(con.id);
                });
                ObservableUtil.notify(this.conversationsSubject, this.conversations);
            })
        );
    }

    findOne(conversationId: string, participantId: string): Observable<ResponseModel> {
        const url = `${this.CONVERSATIONS_BASE_URL}/${conversationId}/participants/${participantId}`;

        return this.http.get<ResponseModel>(url).pipe(
            tap((res: ResponseModel) => {
                this.currentConversation = res.data;
                this.subsribeConversationChannel(this.currentConversation.id);
                ObservableUtil.notify(this.currentConversationSubject, this.currentConversation);
            })
        );
    }
    
    findUnreadMessages(conversationId: string): Observable<ResponseModel> {
        const url = `${this.MESSAGE_READ_STATUS_BASE_URL}/conversations/${conversationId}/unreadMessages/user/${SessionService.getCurrentUser().id}`;

        return this.http.get<ResponseModel>(url).pipe(
            tap((res: ResponseModel) => {
                const messageReadStatuses: MessageReadStatusModel[] = res.data;
                this.messageReadStatuses = new Map(messageReadStatuses.map(status => [status.messageId, status]));
                this.messageReadStatusesSubject.next(this.messageReadStatuses);
            })
        );
    }

    createGroupConversation(conversation: GroupConversationModel, avatar: File): Observable<ResponseModel>{

        const formData = new FormData();
        formData.append('conversation', 
            new Blob([JSON.stringify(conversation)], {type: 'application/json'}));

        if (avatar) {
            formData.append('avatar', avatar);
        }

        return this.http.post<ResponseModel>(this.GROUP_CONVERSATION_BASE_URL, formData).pipe(
            tap((res: ResponseModel) => {
                this.conversations.push(res.data);
                this.subsribeConversationChannel(res.data.id);
                ObservableUtil.notify(this.conversationsSubject, this.conversations);
            })
        );
    }
 
     updateGroupConversation(conversation: GroupConversationModel, avatar: File): Observable<ResponseModel> {

        const formData = new FormData();
    
        if (avatar) {
            formData.append('avatar', avatar);
        }
        formData.append('conversation', 
            new Blob([JSON.stringify(conversation)], {type: 'application/json'}));
            

        return this.http.patch<ResponseModel>(this.GROUP_CONVERSATION_BASE_URL, formData).pipe(
             tap((res: ResponseModel) => {
                const foundConversationIndex: number = this.conversations.findIndex(
                    con => con.id === conversation.id);

                const foundConversation: GroupConversationModel = 
                    this.conversations[foundConversationIndex] as GroupConversationModel;
                
                foundConversation.name = conversation.name;
                foundConversation.avatarCode = res.data;

                this.conversations[foundConversationIndex] = foundConversation;

                (this.currentConversation as GroupConversationModel).name = conversation.name;
                (this.currentConversation as GroupConversationModel).avatarCode = res.data;

                ObservableUtil.notify(this.conversationsSubject, this.conversations);
                ObservableUtil.notify(this.currentConversationSubject, this.currentConversation);
             })
         );
     }
 
     joinGroupConversation(conversationId: string, joinerId: string): Observable<ResponseModel> {
         const URL = `${this.GROUP_CONVERSATION_BASE_URL}/${conversationId}/participants/${joinerId}`;

         return this.http.post<ResponseModel>(URL, null).pipe(
             tap((res: ResponseModel) => {
                const joinedConversation: GroupConversationModel = res.data;

                this.conversations.push(joinedConversation);

                this.subsribeConversationChannel(joinedConversation.id);
                ObservableUtil.notify(this.conversationsSubject, this.conversations);
                    
             })
         );
     }
 
     leaveGroupConversation(conversationId: string, leaverId: string): Observable<ResponseModel> {
        const URL = `${this.GROUP_CONVERSATION_BASE_URL}/${conversationId}/participants/${leaverId}`;
        return this.http.delete<ResponseModel>(URL).pipe(
            tap(() => {
                this.conversations.splice(this.conversations.findIndex(con => con.id === conversationId), 1);
                this.currentConversation = undefined;

                this.unsubscribeConversationChannel(conversationId);

                ObservableUtil.notify(this.conversationsSubject, this.conversations);
                ObservableUtil.notify(this.currentConversationSubject, this.currentConversation);
            })
        );
     }

     markConversationAsRead(conversationId: string): void {
        const topic: string = `/app/user/${SessionService.getCurrentUser().id}/conversationReadStatus/${conversationId}`;
        this.stompService.publish(topic);    
    }

    subsribeConversationChannel(conversationId: string): void {
        const url: string = `${WEB_SOCKET_PUBLIC_ENDPOINT}/conversations/${conversationId}/messages`;
        this.stompService.watch(url, (res: ResponseModel) => {
            
            if (!res.success){
                this.toastService.show(res.message, false);
                return
            }

            const receivedMessage: MessageModel = res.data;

            if (receivedMessage.sender.id === SessionService.getCurrentUser().id) {
                this.currentConversation.messages[0] = receivedMessage;
                this.currentConversation.lastestMessage = receivedMessage;
                const foundConversationIndex = this.conversations.indexOf(this.conversations.find(con => con.id === receivedMessage.conversationId));
                const foundConversation: ConversationModel = this.conversations[foundConversationIndex];
                this.conversations.splice(foundConversationIndex, 1);
                this.conversations.unshift(foundConversation);
                ObservableUtil.notify(this.currentConversationSubject, this.currentConversation);
                ObservableUtil.notify(this.fileUploadedSubject, 100);
                return;
            }

            const foundConversationIndex = this.conversations.indexOf(this.conversations.find(con => con.id === receivedMessage.conversationId));
            const foundConversation: ConversationModel = this.conversations[foundConversationIndex];
            
            if (!foundConversation.messages) {
                foundConversation.messages = [];
            }

            foundConversation.messages.unshift(receivedMessage);
            foundConversation.lastestMessage = receivedMessage;

            this.conversations.splice(foundConversationIndex, 1);
            this.conversations.unshift(foundConversation);

            // If the message is sent to the current conversation 
            if (this.currentConversation && this.currentConversation.id === foundConversation.id) {
                
                this.currentConversation.messages.unshift(receivedMessage);
                this.currentConversation.lastestMessage = receivedMessage;

                this.markConversationAsRead(receivedMessage.conversationId); 
            }else {
                this.conversations[0].hasNewMessage = true;
                ObservableUtil.notify(this.conversationsSubject, this.conversations);
            }
        });
    }

    sendTextMessage(message: MessageModel): void {
        this.currentConversation.messages.unshift(message);
        this.currentConversation.lastestMessage = message;
        const destination: string = `/app/conversations/${message.conversationId}/textMessages`;
        this.stompService.publish(destination, message);
    }
  

    sendMultimediaMessage(message: MessageModel, file: File): Observable<ResponseModel> {

        if (file.size > 1024 * 1024 * 300) {
            this.toastService.show('File size must lest than 300MB', false);
            return;
        }

        this.currentConversation.messages.unshift(message);
        this.currentConversation.lastestMessage = message;

        const formData: FormData = new FormData();
        formData.append('file', file);

        formData.append('message', new Blob([JSON
            .stringify(message)], {
            type: 'application/json'
        }));

        return this.http.post(this.MULTIMEDIA_MESSAGE_BASE_URL, formData, {
            reportProgress: true,
            observe: 'events'
        }).pipe(
            tap((event: HttpEvent<any>) => {
                if (event.type === HttpEventType.UploadProgress) {
                    const progress: number = Math.round((100 * event.loaded) / event.total);
                    if (progress != 100){
                        ObservableUtil.notify(this.fileUploadedSubject, progress);
                    }
                }
            }),
            filter((event: HttpEvent<any>) => event.type === HttpEventType.Response),
            map((event: HttpResponse<any>) => {
                return event.body as ResponseModel
            })
        );
    }

    fetchMessages(conversationId: string, page: number): Observable<ResponseModel> {
        const url: string = `${this.CONVERSATIONS_BASE_URL}/${conversationId}/messages?page=${page}`;
        return this.http.get<ResponseModel>(url).pipe(
            tap((res: ResponseModel) => {
                this.currentConversation.messages = [...this.currentConversation.messages, ...res.data];
                ObservableUtil.notify(this.currentConversationSubject, this.currentConversation);
            })
        );
    }

    subscribeMarkNewMessageAsRead(): void {
        const URL: string = `${WEB_SOCKET_PRIVATE_ENDPOINT}/user/${SessionService.getCurrentUser().id}/conversationReadStatus`;

        this.stompService.watch(URL, (res: ResponseModel) => {
            
            if (!res.success){
                this.toastService.show(res.message, false);
                return;
            }

            this.currentConversation.hasNewMessage = false;
            this.conversations.find(con => con.id === this.currentConversation.id).hasNewMessage = false;

            ObservableUtil.notify(this.conversationsSubject, this.conversations);
            ObservableUtil.notify(this.currentConversationSubject, this.currentConversation);
        })
    }

    unsubscribeConversationChannel(conversationId: string): void {
        const url: string = `${WEB_SOCKET_PUBLIC_ENDPOINT}/conversations/${conversationId}/textMessages`;
        this.stompService.unwatch(url, () => {
        });
    }
 
   
    
}
