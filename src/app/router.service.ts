import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable()
export class RouterService {

  constructor(public router: Router, private location: Location) { }
  
  routeToProfile() {
    this.router.navigate(['profile']);
  }
  
   routeToSearchJob() {
    this.router.navigate(['searchjob']);
  }

}
