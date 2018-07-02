import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  googleurl = 'https://ec2-18-220-137-145.us-east-2.compute.amazonaws.com:3000/api/auth/google';
  facebookurl = 'https://18.220.137.145:3000/api/auth/facebook';
  twitterurl = 'https://ec2-18-220-137-145.us-east-2.compute.amazonaws.com:3000/api/auth/twitter';

  constructor() { }

  facebookredirect() {
    window.document.location.href = this.facebookurl;
  }
  googleredirect() {
    window.document.location.href = this.googleurl;
  }
  twitterredirect() {
    window.document.location.href = this.twitterurl;
  }

}
