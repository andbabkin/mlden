import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base/base.component';
import { HomeRoutingModule } from "./home-routing.module";
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { MaterialModule } from "../material.module";

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ],
  declarations: [BaseComponent, IntroComponent, AboutComponent]
})
export class HomeModule { }
