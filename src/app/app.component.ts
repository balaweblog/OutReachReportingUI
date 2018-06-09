import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DetailsService } from './core/details.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email = 'suryaecw@gmail.com';
  constructor(private detailsService:DetailsService, private router: Router ) {
    if (this.detailsService.isUserRegistered(this.email)) {
    	router.navigate['search'];
    } else {
    	router.navigate['profile'];
    }
  }
}
