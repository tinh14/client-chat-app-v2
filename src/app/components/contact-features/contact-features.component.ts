import { Component } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { NGB_MODAL_BACKDROP_STATIC_OPTIONS } from 'src/app/config';

import { FindContactModelComponent } from '../find-contact-modal/find-contact-modal.component';

@Component({
  selector: 'app-contact-features',
  templateUrl: './contact-features.component.html',
  styleUrls: ['./contact-features.component.css']
})
export class ContactFeaturesComponent {

  constructor(private ngbModal: NgbModal) { }

  onFindContactOpened(): void {
    this.ngbModal.open(FindContactModelComponent, NGB_MODAL_BACKDROP_STATIC_OPTIONS);
  }
}
