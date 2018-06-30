import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,  ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { ProfileModule } from './profile/profile.module';
import { SearchjobModule } from './searchjob/searchjob.module';
import { ApplyjobModule } from './applyjob/applyjob.module';
import { SharedModule } from './shared/shared.module';
import { LandingModule } from './landing/landing.module';
import { ApplyjobComponent } from './applyjob/applyjob.component';

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
  ApplyjobModule,
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
