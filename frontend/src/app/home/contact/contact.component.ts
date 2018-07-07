import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import { ContactService } from "./contact.service";
import { ContactMessage } from "./contact-message";

@Component({
  selector: 'mden-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {
  nameFormGroup: FormGroup;
  emailFormGroup: FormGroup;
  msgFormGroup: FormGroup;
  name: FormControl;
  email: FormControl;

  constructor(private _formBuilder: FormBuilder, public contact: ContactService) {}

  ngOnInit() {
    this.nameFormGroup = this._formBuilder.group({
      nameCtrl: ['', Validators.required]
    });
    this.name = this.nameFormGroup.get('nameCtrl') as FormControl;
    this.emailFormGroup = this._formBuilder.group({
      emailCtrl: ['', [Validators.required, Validators.email]]
    });
    this.email = this.emailFormGroup.get('emailCtrl') as FormControl;
    this.msgFormGroup = this._formBuilder.group({
      msgCtrl: ['', Validators.required]
    });
  }

  send() {
    let c: ContactMessage = {
      name: this.name.value,
      email: this.email.value,
      body: this.msgFormGroup.get('msgCtrl').value
    };
    this.contact.send(c);
  }

  msgExists(){
    return this.msgFormGroup.get('msgCtrl').value.length > 3;
  }

  showStepper(): boolean {
    return !this.contact.sent;
  }
}
