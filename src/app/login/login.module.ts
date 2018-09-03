import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { MatIconModule } from '@angular/material';
import { AlertModule } from '../../../node_modules/ngx-bootstrap/alert';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    LoginRoutingModule,
    MatIconModule,
    CommonModule,
    AlertModule
  ],
  exports:[
    LoginComponent
  ],
  declarations: [LoginComponent]
})

export class LoginModule { }
