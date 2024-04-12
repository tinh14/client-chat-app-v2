import { MessageModel } from "./message.model";

export class TextMessageModel extends MessageModel {
    content: string;
    constructor(){
        super();
        this.instanceOf = "TEXT";
    }
}