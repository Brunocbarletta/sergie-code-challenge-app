import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.scss']
})
export class FormModalComponent {
  @Input() data: { name: string; email: string; phone: number} = {
    name: "",
    email: "",
    phone: 0
  };
	constructor(public activeModal: NgbActiveModal) {}
}
