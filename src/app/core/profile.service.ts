import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Userprofile } from '../models/userprofile';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProfileService {

  apiUrl = 'https://18.220.137.145:3000/api';

  constructor(private http: Http) { }

  addprofile(userprofile: Userprofile): Promise<string> {
    return this.http.post(`${this.apiUrl}/core/userprofile`, userprofile, "").toPromise()
    .then(res => res.toString()).catch(this.handleErrorPromise);
  }

  private handleErrorPromise (error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }
}
