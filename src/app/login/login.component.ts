import { Component, OnInit } from '@angular/core';
import { LoginService } from '../core/login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class  LoginComponent implements OnInit {

  constructor(private route:ActivatedRoute, private loginservice: LoginService) { }

  ngOnInit() {
    console.log(this.route.snapshot.data['message']);
  }
  facebooklogin() {
    this.loginservice.facebookredirect();
  }
  googlelogin() {
    this.loginservice.googleredirect();
  }
  twitterlogin() {
    this.loginservice.twitterredirect();
  }
}
