import { SessionService } from "../services/session.service";
import { GroupConversationModel } from "./group-conversation.model";
import { MessageModel } from "./message.model";
import { UserModel } from "./user.model";

export class ConversationModel {
    id: string;
    lastestMessage: MessageModel;
    messages: MessageModel[];
    participants: UserModel[];
    instanceOf: string;
    
    hasNewMessage: boolean = false;

    constructor(){
        this.lastestMessage = null;
        this.messages = [];
        this.participants = [];
    }

    static isGroupConversation(conversation: ConversationModel): boolean {
        return conversation.instanceOf === 'GROUP';
    }
    
    static getAvatarCode(conversation: ConversationModel): string {
        if (this.isGroupConversation(conversation)){
            return (conversation as GroupConversationModel).avatarCode;
        }   
        return conversation.participants.find(
            participant => participant.id !== SessionService.getCurrentUser().id).avatarCode;;
    }

    static getName(conversation: ConversationModel): string {
        if (this.isGroupConversation(conversation)){
            return (conversation as GroupConversationModel).name;
        }
        return conversation.participants.find(
            participant => participant.id !== SessionService.getCurrentUser().id).name;
    }
}
