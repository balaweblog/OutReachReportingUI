import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  photoimage: string;
  tempimage: string = 'https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/user-male-circle-blue-512.png';
  isLoggedIn: boolean;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  routePage(page) {
      if (page === 'profile') {
          this.router.navigate(['profile']);
      } else if (page === 'search') {
          this.router.navigate(['searchjob']);
      } else if (page === 'apply') {
          this.router.navigate(['applyjob']);
      } else if (page === 'logout') {
          localStorage.clear();
          this.router.navigate(['login']);
      }
  }
}
