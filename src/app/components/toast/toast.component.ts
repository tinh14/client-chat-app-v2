import { Component, OnDestroy, OnInit} from '@angular/core';

import { Toast, ToastService } from './toast.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-toast',
	templateUrl: './toast.component.html',
	styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit, OnDestroy {

	toasts: Toast[] = [];
	private toastSubscription: Subscription;

	constructor(private toastService: ToastService) {}

	ngOnInit(): void {
		this.toastSubscription = this.toastService.toasts$.subscribe(
			(toasts: Toast[]) => {
				this.toasts = toasts;
			}
		);
	}

	ngOnDestroy(): void {
		this.toastSubscription.unsubscribe();
	}

	onClicked(toast: Toast): void {
		this.toastService.remove(toast);
	}
}

