import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,  ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { SearchjobModule } from './dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatIconModule, MatMenuModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  CoreModule,
  SharedModule,
  MatToolbarModule,
  BrowserModule,
  AppRoutingModule,
  LayoutModule,
  SearchjobModule,
  FormsModule,
  ReactiveFormsModule,
  LoginModule,
  MatToolbarModule, MatIconModule, MatMenuModule,
  CoreModule
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
