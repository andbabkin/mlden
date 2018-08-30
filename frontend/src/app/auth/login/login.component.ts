import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthService } from "../auth.service";

@Component({
  selector: 'mden-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;
  name: FormControl;
  pass: FormControl;

  constructor(private _formBuilder: FormBuilder, private auth: AuthService) { }

  ngOnInit() {
    // Form init
    this.loginFormGroup = this._formBuilder.group({
      nameCtrl: ['', Validators.required],
      passCtrl: ['', Validators.required]
    });
    this.name = this.loginFormGroup.get('nameCtrl') as FormControl;
    this.pass = this.loginFormGroup.get('passCtrl') as FormControl;
  }

  invalid(){
    return !this.name.valid || !this.pass.valid;
  }

  login(){}

}
