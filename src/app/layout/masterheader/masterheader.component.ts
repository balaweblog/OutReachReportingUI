import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-masterheader',
  templateUrl: './masterheader.component.html',
  styleUrls: ['./masterheader.component.css']
})
export class MasterheaderComponent implements OnInit {

  photoimage: string;
  tempimage: string = 'https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/user-male-circle-blue-512.png';
  isLoggedIn: boolean;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.photoimage = localStorage.getItem('photo');
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
