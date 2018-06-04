import { Component } from '@angular/core';
import { RouterService } from './router.service';
import {DetailsService} from './details.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
email = 'suryaecw@gmail.com';
  constructor(private routerService: RouterService,private detailsService:DetailsService ){
    if(this.detailsService.isUserRegistered(this.email)){
    	this.routerService.routeToSearchJob();
    }else{
    	this.routerService.routeToProfile();
    }
  	
  }
  
  
  
}
