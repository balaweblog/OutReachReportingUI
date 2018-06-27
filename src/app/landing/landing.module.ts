import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { LandingRoutingModule } from './landing-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LandingRoutingModule
  ],
  exports: [
    LandingComponent
  ],
  declarations: [LandingComponent]
})
export class LandingModule { }
