import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSliderModule} from '@angular/material/slider';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatStepperModule} from '@angular/material/stepper';
import {MatListModule} from '@angular/material/list';
import {MatDatepickerModule, MatNativeDateModule, MatProgressBarModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {FormsModule,  ReactiveFormsModule} from '@angular/forms';


import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { IonRangeSliderModule } from "ng2-ion-range-slider";


@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MatSliderModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    MatStepperModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressBarModule,
    IonRangeSliderModule

  ],
  exports:[
    ProfileComponent
  ],
  declarations: [ProfileComponent]
})
export class ProfileModule { }
