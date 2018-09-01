import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from "rxjs/index";
import { map } from "rxjs/internal/operators";

import { ApiResponse } from "./models/api-response";
import { LoginData } from "./models/login-data";
import { API_USER } from "../core/api-routes";
import { AuthUser } from "./models/auth-user";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: AuthUser;
  private token: string;

  constructor(private http: HttpClient) { }

  httpOptions(secured: boolean){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    if(secured && this.token){
      headers = headers.append('Authorization', 'Bearer ' + this.token);
    }
    return { headers: headers };
  }

  authenticate(l: LoginData): Observable<ApiResponse>{
    let data = {
      grant_type: environment.oa_type,
      client_id: environment.oa_cid,
      client_secret: environment.oa_cs,
      username: l.name,
      password: l.password,
      scope: '*',
    };
    return this.http.post<ApiResponse>(environment.oa_url, data, this.httpOptions(false)).pipe(
      map(r => { return { data: r, error: '', status: 200}; }),
      catchError(this.handleError())
    );
  }

  fetchUser(){
    this.http.get<ApiResponse>(API_USER, this.httpOptions(true)).pipe(
      map(r => { return { data: r, error: '', status: 200}; }),
      catchError(this.handleError())
    ).subscribe(response => {
      if(response.status === 200){
        this.user = {
          id: response.data.id,
          name: response.data.name,
          email: response.data.email
        }
      } else {
        console.error(response.error);
      }
    });
  }

  getUserName(): string {
    return this.user ? this.user.name : '';
  }

  setToken(token: string){
    this.token = token;
  }

  logout(){
    this.token = '';
    this.user = null;
  }

  isLoggedIn(): boolean {
    return this.token && this.token.length > 0;
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
