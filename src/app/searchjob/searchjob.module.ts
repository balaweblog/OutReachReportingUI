import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatMenuModule, MatIconModule, MatFormFieldModule, MatSelectModule, MatAutocompleteModule,
   MatStepperModule, MatDialogModule, MatListModule, MatDatepickerModule, MatNativeDateModule, MatInputModule,
   MatExpansionModule, MatCardModule, MatProgressBarModule, MatChipsModule, MatSnackBarModule} from '@angular/material';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { SearchjobComponent } from './searchjob.component';
import { SearchjobRoutingModule } from './searchjob-routing.module';
import { IonRangeSliderModule } from "ng2-ion-range-slider";
import { AlertModule } from 'ngx-bootstrap/alert';

@NgModule({
  imports: [
    [AlertModule.forRoot()],
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
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
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
  ]
})
export class SearchjobModule { }
