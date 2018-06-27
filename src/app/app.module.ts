import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import {MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule,  ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { ProfileModule } from './profile/profile.module';
import { SearchjobModule } from './searchjob/searchjob.module';
import { SharedModule } from './shared/shared.module';
import { LandingModule } from './landing/landing.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  CoreModule,
  SharedModule,
  BrowserModule,
  AppRoutingModule,
  SearchjobModule,
  ProfileModule,
  FormsModule,
  ReactiveFormsModule,
  LoginModule,
  CoreModule,
  ProfileModule,
  LandingModule

  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
