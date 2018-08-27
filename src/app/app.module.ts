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
import { BaseheaderComponent } from './layout/baseheader/baseheader.component';
import { MasterheaderComponent } from './layout/masterheader/masterheader.component';
import { BaselayoutComponent } from './layout/baselayout/baselayout.component';
import { MasterlayoutComponent } from './layout/masterlayout/masterlayout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatIconModule, MatMenuModule } from '@angular/material';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseheaderComponent,
    MasterheaderComponent,
    BaselayoutComponent,
    MasterlayoutComponent,
    FooterComponent
  ],
  imports: [
  CoreModule,
  SharedModule,
  MatToolbarModule,
  BrowserModule,
  AppRoutingModule,
  LayoutModule,
  SearchjobModule,
  ApplyjobModule,
  ProfileModule,
  FormsModule,
  ReactiveFormsModule,
  LoginModule,
  MatToolbarModule, MatIconModule, MatMenuModule,
  CoreModule,
  ProfileModule,
  LandingModule

  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
