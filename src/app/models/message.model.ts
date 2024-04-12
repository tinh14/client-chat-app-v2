import { SessionService } from "../services/session.service";
import { UserModel } from "./user.model";

export class MessageModel {
    id: string;
    sentAt: string;
    sender: UserModel;
    conversationId: string;
    instanceOf: string;
    status: string;

    static isTextMessage(message: MessageModel): boolean {
        return message.instanceOf === 'TEXT';
    }

    static isSentMessage(message: MessageModel): boolean {
        const CURRENT_USER: UserModel = SessionService.getCurrentUser();
        return message.sender.id === CURRENT_USER.id;
    }
}
