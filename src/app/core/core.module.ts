import { NgModule } from '@angular/core';

import { UtilitiesService } from './utilities.service';
import { HttpModule } from '@angular/http';
import { ProfileService } from './profile.service';
import { JobService } from './job.service';
import { LoginService } from './login.service';


@NgModule({
  imports: [HttpModule ],
  declarations: [ ],
  providers: [ UtilitiesService, ProfileService, JobService, LoginService]
})

export class CoreModule { }
