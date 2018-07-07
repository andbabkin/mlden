import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import {Observable, of} from "rxjs/index";

import { ContactMessage } from "./contact-message";
import { API_SEND_MSG } from "../../core/api-routes";
import { ValidationError } from "../../shared/validation-error";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  sending: boolean = false;
  sent: boolean =false;
  failed: boolean = false;
  invalid: ValidationError;
  err_msg: string;

  constructor(private http: HttpClient) {}

  send(msg: ContactMessage) {
    this.sending = true;
    this.sent = false;
    this.failed = false;
    this.invalid = null;
    let response$ = this.http.post(API_SEND_MSG, msg, httpOptions).pipe(
      catchError(this.handleError('Sending a message'))
    );
    response$.subscribe(response => {
      if(response['ok']){
        this.sent = true;
      }
      this.sending = false;
    });
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   */
  private handleError(operation = 'operation'){
    return (error: any): Observable<object> => {
      if(error.status == 422){
        this.invalid = new ValidationError(error.error);
        this.err_msg = this.invalid.message;
      } else {
        this.err_msg = error.message;
      }
      this.failed = true;
      this.sending = false;
      let result = {
        ok: false
      };
      return of(result);
    };
  }
}
