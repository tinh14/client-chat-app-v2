import { Subject } from "rxjs";

export class ObservableUtil {
    static notify(subject: Subject<any>, data: any): void {
        let nextedData: any;
        if (data instanceof Map) {
            nextedData = Array.from(data.values());
        }else {
            nextedData = data;
        }
        subject.next(nextedData);
    }
}