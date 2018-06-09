import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class  LoginComponent implements OnInit {
  googleurl = 'https://localhost:3000/api/auth/google';
  facebookurl = 'https://localhost:3000/api/auth/facebook';
  twitterurl = 'https://localhost:3000/api/auth/twitter';

  constructor(private router: Router) { }

  ngOnInit() {
  }
  facebooklogin() {
    window.document.location.href = this.facebookurl;
  }
  googlelogin() {
    window.document.location.href = this.googleurl;
  }
  twitterlogin() {
    window.document.location.href = this.twitterurl;
  }
}
