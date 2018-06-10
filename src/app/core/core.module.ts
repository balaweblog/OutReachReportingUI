import { NgModule } from '@angular/core';

import { DetailsService } from './details.service';
import { UtilitiesService } from './utilities.service';
import { HttpModule } from '@angular/http';


@NgModule({
  imports: [HttpModule ],
  declarations: [ ],
  providers: [DetailsService, UtilitiesService]
})

export class CoreModule { }
