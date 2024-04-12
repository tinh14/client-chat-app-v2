import { ConversationModel } from "./conversation.model";

export class IndividualConversationModel extends ConversationModel {
    constructor(){
        super();
        this.instanceOf = "INDIVIDUAL";
    }
}