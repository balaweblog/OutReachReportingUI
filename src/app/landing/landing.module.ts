import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { LandingRoutingModule } from './landing-routing.module';
import { MasterheaderComponent } from '../layout/masterheader/masterheader.component';

@NgModule({
  imports: [
    CommonModule,
    LandingRoutingModule
  ],
  exports: [
    LandingComponent
  ],
  providers: [
    MasterheaderComponent
  ],
  declarations: [LandingComponent]
})
export class LandingModule { }
