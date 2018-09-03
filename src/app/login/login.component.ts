import { Component, OnInit } from '@angular/core';
import { LoginService } from '../core/login.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class  LoginComponent implements OnInit {

  alertmessage: boolean = false;
  constructor(private loginservice: LoginService, private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('id') === null) {
        this.alertmessage = false;
    } else {
      this.alertmessage = true;
    }
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
