import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { SITE_CONTENT } from "./mock-content";

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  content: object;
  loaded: boolean = false;

  constructor() { }

  load() {
    of(SITE_CONTENT).subscribe(content => {
      this.content = content;
      this.loaded = true;
    });
  }

  get(key: string): string {
    if(this.content.hasOwnProperty(key)){
      return this.content[key];
    } else {
      return `(${key})`;
    }
  }

  isLoaded(): boolean { return this.loaded; }
}
