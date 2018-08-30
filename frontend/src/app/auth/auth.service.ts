import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from "rxjs/index";
import { map } from "rxjs/internal/operators";

import { authData } from "./passport-config";
import { ApiResponse } from "./models/api-response";
import { LoginData } from "./models/login-data";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  authenticate(l: LoginData): Observable<ApiResponse>{
    let data = {
      grant_type: authData.grant_type,
      client_id: authData.client_id,
      client_secret: authData.client_secret,
      username: l.name,
      password: l.password,
      scope: '*',
    };
    return this.http.post<ApiResponse>('', data, httpOptions).pipe(
      map(r => { return { data: r, error: '', status: 200}; }),
      catchError(this.handleError())
    );
  }

  private handleError(){
    return (error: any): Observable<ApiResponse> => {
      return of({
        data: false,
        error: error.message,
        status: error.status
      });
    };
  }
}
