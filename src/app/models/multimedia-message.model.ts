import { MessageModel } from "./message.model";

export class MultimediaMessageModel extends MessageModel {
    fileCode: string;
    fileName: string;
    fileType: string;

    constructor(){
        super();
        this.instanceOf = "MULTIMEDIA";
    }

    static isOtherType(message: MultimediaMessageModel): boolean {
        return !MessageModel.isTextMessage(message) && message.fileType === 'OTHER';
    }
}