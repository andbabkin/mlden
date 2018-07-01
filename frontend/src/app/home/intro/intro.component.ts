import { Component, OnInit } from '@angular/core';
import { ContentService } from "../../core/content.service";

@Component({
  selector: 'mden-intro',
  templateUrl: './intro.component.html'
})
export class IntroComponent implements OnInit {

  constructor(
    public content: ContentService
  ) { }

  ngOnInit() {
  }

}
