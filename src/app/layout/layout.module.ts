import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseheaderComponent } from './baseheader/baseheader.component';
import { MasterheaderComponent } from './masterheader/masterheader.component';
import { BaselayoutComponent } from './baselayout/baselayout.component';
import { MasterlayoutComponent } from './masterlayout/masterlayout.component';
import { FooterComponent } from './footer/footer.component';
import {MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule
  ],
  exports:[
    BaseheaderComponent, MasterheaderComponent, BaselayoutComponent, MasterlayoutComponent, FooterComponent
  ],
  declarations: [BaseheaderComponent, MasterheaderComponent, BaselayoutComponent, MasterlayoutComponent, FooterComponent]
})
export class LayoutModule { }
