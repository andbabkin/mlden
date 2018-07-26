import { Component, OnInit, HostBinding } from '@angular/core';
import {fadeInAnimation} from "../../shared/animations";

@Component({
  selector: 'mden-projects',
  templateUrl: './projects.component.html',
  animations: [ fadeInAnimation ]
})
export class ProjectsComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';

  constructor() { }

  ngOnInit() {
  }

}
