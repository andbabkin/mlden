import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { API_CONTENT } from "./api-routes";
import {Observable, of} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  error: string = '';
  private content: object;
  private loaded: boolean = false;
  private failed: boolean = false;

  constructor(private http: HttpClient) { }

  load() {
    let response$ = this.http.get(API_CONTENT).pipe(
      catchError(this.handleError('Content request', { err:"Request to RestAPI server failed" }))
    );
    response$.subscribe(content => {
      this.content = content;
      if(content.hasOwnProperty('err')){
        this.error = content['err'];
      }
      this.setLoaded();
    });
  }

  private setLoaded() {
    this.loaded = true;
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      this.setLoaded();
      this.failed = true;
      return of(result as T);
    };
  }

  isLoaded(): boolean { return this.loaded; }

  isFailed(): boolean { return this.failed; }

  get(key: string): string {
    if(this.content.hasOwnProperty(key)){
      return this.content[key];
    } else {
      return `(${key})`;
    }
  }

}
