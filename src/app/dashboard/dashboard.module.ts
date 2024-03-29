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
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { IonRangeSliderModule } from "ng2-ion-range-slider";
import { AlertModule } from 'ngx-bootstrap/alert';
import { VirtualScrollModule } from 'ngx-virtual-scroll-plus';

@NgModule({
  imports: [
    [AlertModule.forRoot()],
    CommonModule,
    DashboardRoutingModule,
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
    VirtualScrollModule,
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
    DashboardComponent
  ],
  declarations: [DashboardComponent],
  entryComponents: [
  ]
})
export class SearchjobModule { }
