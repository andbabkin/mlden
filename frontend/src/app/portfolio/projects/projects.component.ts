import { Component, OnInit } from '@angular/core';
import {PortfolioService} from "../portfolio.service";

@Component({
  selector: 'mden-projects',
  templateUrl: './projects.component.html',
})
export class ProjectsComponent implements OnInit {

  constructor(public portfolio: PortfolioService) { }

  ngOnInit() {
    this.portfolio.load();
  }

}
