import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

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

  constructor(private _formBuilder: FormBuilder) {}

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
    alert("Message sent!");
  }

  msgExists(){
    return this.msgFormGroup.get('msgCtrl').value.length > 3;
  }
}
