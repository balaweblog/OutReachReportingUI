import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatMenuModule, MatIconModule, MatFormFieldModule, MatSelectModule, MatAutocompleteModule,
   MatStepperModule, MatDialogModule, MatListModule, MatDatepickerModule, MatNativeDateModule, MatInputModule,
   MatExpansionModule, MatCardModule, MatProgressBarModule, MatChipsModule} from '@angular/material';

import { MatSliderModule } from '@angular/material/slider';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SkillfamilyComponent } from '../shared/skillfamily/skillfamily.component';
import { SharedModule } from '../shared/shared.module';
import { SearchjobComponent } from './searchjob.component';
import { SearchjobRoutingModule } from './searchjob-routing.module';
import { IonRangeSliderModule } from "ng2-ion-range-slider";


@NgModule({
  imports: [
    CommonModule,
    SearchjobRoutingModule,
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSliderModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    MatStepperModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatChipsModule,
    BrowserModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    SharedModule,
    FormsModule,
    IonRangeSliderModule
  ],
  exports:[
    SearchjobComponent
  ],
  declarations: [SearchjobComponent],
  entryComponents: [
    SkillfamilyComponent
  ]
})
export class SearchjobModule { }
