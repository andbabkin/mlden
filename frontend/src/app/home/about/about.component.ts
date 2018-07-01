import { Component, OnInit } from '@angular/core';
import {ContentService} from "../../core/content.service";

@Component({
  selector: 'mden-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  constructor(
    public content: ContentService
  ) { }

  ngOnInit() {
  }

}
