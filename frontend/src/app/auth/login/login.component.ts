import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { AuthService } from "../auth.service";
import {LoginData} from "../models/login-data";

@Component({
  selector: 'mden-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;
  name: FormControl;
  pass: FormControl;
  err: string;

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

  login(){
    let ld: LoginData = {name: this.name.value, password: this.pass.value};
    this.err = '';
    this.auth.authenticate(ld).subscribe(response => {
      if(response.status === 200){
        // Logged in successfully
        this.auth.setToken(response.data.access_token);
        this.auth.fetchUser();
      } else if(response.status === 401){
        // Access denied
        this.err = 'Access denied';
      } else {
        // Request failed
        this.err = response.error;
        console.error('Status: ' + response.status + '. ' + response.error);
      }
    });
  }

  user(): string {
    return this.auth.getUserName();
  }

  logout(){
    this.auth.logout();
    this.pass.setValue('');
  }

  isIn(){
    return this.auth.isLoggedIn();
  }
}
