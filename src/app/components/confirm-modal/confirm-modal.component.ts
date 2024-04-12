import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Observable, Subject } from 'rxjs';


@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent {

  private modalOnConfirmedSubject: Subject<void> = new Subject<void>();

  constructor(private ngbActiveModal: NgbActiveModal) {}

  onModalConfirmed(): Observable<void> {
    return this.modalOnConfirmedSubject.asObservable();
  }

  onConfirmed(): void {
    this.modalOnConfirmedSubject.next();
    this.onClosed();
  }

  onClosed(): void {
    this.ngbActiveModal.close();
  }
}
