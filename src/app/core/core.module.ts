import { NgModule } from '@angular/core';

import { UtilitiesService } from './utilities.service';
import { HttpModule } from '@angular/http';
import { ProfileService } from './profile.service';
import { JobService } from './job.service';
import { LoginService } from './login.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpInterceptorService } from './httpinterceptor.service';
import { CryptoService } from './crypto.service';


@NgModule({
  imports: [HttpModule, HttpClientModule ],
  declarations: [ ],
  providers: [ UtilitiesService, ProfileService, JobService, LoginService, CryptoService,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: HttpInterceptorService,
        multi: true,
    }]
})

export class CoreModule { }
