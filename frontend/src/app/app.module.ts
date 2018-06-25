/* Angular core modules */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
/* Additional external modules */
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServiceWorkerModule } from '@angular/service-worker';
/* App base */
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
/* Modules */
import { CoreModule } from "./core/core.module";
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
/* Components */
import { AppComponent } from './app.component';
import { HeaderComponent } from "./layout/header/header.component";
import { FooterComponent } from './layout/footer/footer.component';
import { NotFoundComponent } from './err/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, FooterComponent, NotFoundComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    NgbModule.forRoot(),
    MaterialModule,
    CoreModule,
    SharedModule,
    HomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
