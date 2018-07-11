import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from "rxjs/index";

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
  invalid: ValidationError;
  err_msg: string;

  constructor(private http: HttpClient) {}

  /**
   * Executes POST request sending a message from a visitor to site owner.
   * @param {ContactMessage} msg
   * @returns {Observable<any>} it holds an object with boolean property "ok"
   *    which informs about the success or failure of the operation.
   */
  send(msg: ContactMessage) {
    this.invalid = null;
    return this.http.post(API_SEND_MSG, msg, httpOptions).pipe(
      catchError(this.handleError())
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   */
  private handleError(){
    return (error: any): Observable<any> => {
      if(error.status == 422){
        this.invalid = new ValidationError(error.error);
        this.err_msg = this.invalid.message;
      } else {
        console.error(error.message);
        this.err_msg = 'Error encountered while sending the message.';
      }
      let result = {
        ok: false
      };
      return of(result);
    };
  }
}
