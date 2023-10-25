import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormModalComponent } from '../form-modal/form-modal.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  contactForm: FormGroup = this.formBuilder.group({
    name: ["", Validators.required],
    email: ["", Validators.email],
    phone: ["", Validators.required]
  });

  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal
  ) {}

  onSubmit(data: any) {
    this.submitted = true;
    this.openModal(data);
    this.resetForm();
  }

  resetForm() {
    this.submitted = false;
    this.contactForm.reset();
  }

  openModal(data: { name: any; email: any; phone: any; }) {
		const modalRef = this.modalService.open(FormModalComponent);
		modalRef.componentInstance.data = {
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      phone: this.contactForm.value.phone
    };
	}
}