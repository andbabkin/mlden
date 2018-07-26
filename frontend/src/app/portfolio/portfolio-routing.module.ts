import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from "./projects/projects.component";

const portRoutes: Routes = [
  { path: 'portfolio', component: ProjectsComponent },
];

@NgModule({
  imports: [ RouterModule.forChild(portRoutes) ],
  exports: [ RouterModule ]
})
export class PortfolioRoutingModule { }
