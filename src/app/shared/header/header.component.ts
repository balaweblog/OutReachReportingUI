import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  routePage(page) {
      if (page === 'profile') {
          this.router.navigate(['profile']);
      } else if (page === 'search') {
          this.router.navigate(['searchjob']);
      }
  }
}
