import { Component, OnInit, HostBinding } from '@angular/core';
import { fadeInAnimation } from "../../shared/animations";

@Component({
  templateUrl: './base.component.html',
  animations: [ fadeInAnimation ]
})
export class BaseComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';

  constructor() { }

  ngOnInit() {
  }

}
