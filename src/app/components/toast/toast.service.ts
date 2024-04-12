import { Injectable} from '@angular/core';
import { Subject } from 'rxjs';

export interface Toast {
	content?: string;
	classname?: string;
}

@Injectable({ providedIn: 'root' })
export class ToastService {

	private toasts: Toast[] = [];
	private toastsSubject: Subject<Toast[]> = new Subject<Toast[]>();
	toasts$ = this.toastsSubject.asObservable();

	constructor() {}

	show(content: string, isSuccess: boolean): void {
		const classname: string = isSuccess ? 'bg-success' : 'bg-danger';

		const toast: Toast = {
			content: content,
			classname: `text-light ${classname}`
		};

		this.toasts.push(toast);
		this.toastsSubject.next(this.toasts);
	}

	remove(toast: Toast): void {
		this.toasts = this.toasts.filter((t) => t !== toast);
		this.toastsSubject.next(this.toasts);
	}
}