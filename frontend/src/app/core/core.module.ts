import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from "./content.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ContentService]
})
export class CoreModule {
  /* This module should be loaded only once. */
  constructor(
    @Optional()
    @SkipSelf()
      parentModule: CoreModule
  ) {
      if (parentModule) {
        throw new Error('CoreModule is already loaded. Import only in AppModule');
      }
  }
}
