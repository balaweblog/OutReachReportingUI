import { Injectable } from '@angular/core';
import { GlobalVariable } from '../global';

@Injectable()
export class LoginService {

  constructor() { }

  facebookredirect() {
    window.document.location.href = GlobalVariable.FACEBOOK_API_URL;
  }
  googleredirect() {
    window.document.location.href = GlobalVariable.GOOGLE_API_URL;
  }
  twitterredirect() {
    window.document.location.href = GlobalVariable.TWITTER_API_URL;
  }

}
