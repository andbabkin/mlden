import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base/base.component';
import { HomeRoutingModule } from "./home-routing.module";
import { IntroComponent } from './intro/intro.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [BaseComponent, IntroComponent]
})
export class HomeModule { }
