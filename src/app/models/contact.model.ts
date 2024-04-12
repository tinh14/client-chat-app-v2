import { UserModel } from "./user.model";

export class ContactModel {
    id: string;
    sender: UserModel;
    receiver: UserModel;
    conversationId: string;
}