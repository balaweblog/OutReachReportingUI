import { NgModule } from '@angular/core';

import { DetailsService } from './details.service';
import { UtilitiesService } from './utilities.service';
import { HttpModule } from '@angular/http';
import { ProfileService } from './profile.service';


@NgModule({
  imports: [HttpModule ],
  declarations: [ ],
  providers: [DetailsService, UtilitiesService, ProfileService]
})

export class CoreModule { }
