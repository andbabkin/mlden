import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from "rxjs/index";

import { API_PORTFOLIO } from "../core/api-routes";
import { Project } from "./project";

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  error: string = '';
  projects: Project[];
  private loaded: boolean = false;
  private failed: boolean = false;

  constructor(private http: HttpClient) { }

  load() {
    let response$ = this.http.get(API_PORTFOLIO).pipe(
      catchError(this.handleError('Portfolio request', { err:"Request to RestAPI server failed" }))
    );
    response$.subscribe(content => {
      if(content.hasOwnProperty('err')){
        this.error = content['err'];
        this.projects = [];
      } else {
        this.projects = content as Project[];
      }
      this.setLoaded();
    });
  }

  isLoaded(): boolean { return this.loaded; }

  isFailed(): boolean { return this.failed; }

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
}
