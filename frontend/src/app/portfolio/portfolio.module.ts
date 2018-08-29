import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from "../material.module";
import { ProjectsComponent } from './projects/projects.component';
import { PortfolioRoutingModule } from "./portfolio-routing.module";

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    PortfolioRoutingModule
  ],
  declarations: [ProjectsComponent]
})
export class PortfolioModule { }
