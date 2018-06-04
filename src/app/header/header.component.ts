import { Component, OnInit } from '@angular/core';
import { RouterService } from '../router.service';
import { ActivatedRoute } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private routerService: RouterService) {
  	
   }

  ngOnInit() {
  }

  routePage(page){
      if(page=='profile'){
      	this.routerService.routeToProfile();
      }else if(page=='search'){
      	this.routerService.routeToSearchJob();
      }
  }
}
