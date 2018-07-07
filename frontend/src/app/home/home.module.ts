import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, ReactiveFormsModule } from "@angular/forms";

import { BaseComponent } from './base/base.component';
import { HomeRoutingModule } from "./home-routing.module";
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { MaterialModule } from "../material.module";
import { ContactComponent } from './contact/contact.component';
import { ContactService } from "./contact/contact.service";

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [BaseComponent, IntroComponent, AboutComponent, ContactComponent],
  providers: [FormBuilder, ContactService]
})
export class HomeModule { }
