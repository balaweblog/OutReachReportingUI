import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    LoginRoutingModule,
    MatIconModule
  ],
  exports:[
    LoginComponent
  ],
  declarations: [LoginComponent]
})

export class LoginModule { }
