import { SessionService } from "../services/session.service";
import { ConversationModel } from "./conversation.model";

export class GroupConversationModel extends ConversationModel {
    name: string;
    ownerId: string;
    avatarCode: string;

    constructor(){
        super();
        this.instanceOf = "GROUP";
    }  

    static isOwner(conversation: ConversationModel): boolean {
        return (conversation as GroupConversationModel).ownerId === SessionService.getCurrentUser().id;
    }
}