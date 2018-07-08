import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Subject} from "rxjs/index";
import {debounceTime} from 'rxjs/operators';

import { ContactService } from "./contact.service";
import { ContactMessage } from "./contact-message";

@Component({
  selector: 'mden-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {
  private success$ = new Subject<string>();

  nameFormGroup: FormGroup;
  emailFormGroup: FormGroup;
  msgFormGroup: FormGroup;
  name: FormControl;
  email: FormControl;
  msg: FormControl;

  sending: boolean = false;
  sent: boolean = false;
  failed: boolean = false;
  successMessage: string;

  constructor(private _formBuilder: FormBuilder, public contact: ContactService) {}

  ngOnInit() {
    // Form initialization
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
    this.msg = this.msgFormGroup.get('msgCtrl') as FormControl;

    // Success alert preparation
    this.success$.subscribe((message) => this.successMessage = message);
    this.success$.pipe(
      debounceTime(3000)
    ).subscribe(() => {
      this.successMessage = null;
    });
  }

  send() {
    this.sending = true;
    this.sent = false;
    this.failed = false;
    let c: ContactMessage = {
      name: this.name.value,
      email: this.email.value,
      body: this.msgFormGroup.get('msgCtrl').value
    };
    this.contact.send(c).subscribe(response => {
      if(response['ok']){
        this.sent = true;
        this.msg.setValue('');
        this.success$.next('Message is sent. Thank you!');
      } else {
        this.failed = true;
      }
      this.sending = false;
    });
  }

  msgExists(){
    return this.msg.value.length > 3;
  }
}
