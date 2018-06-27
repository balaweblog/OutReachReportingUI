import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Userprofile } from '../models/userprofile';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProfileService {

  apiUrl = 'https://localhost:3000/api';

  constructor(private http: HttpClient) { }

  addprofile(userprofile: Userprofile): Promise<string> {
    return this.http.post(`${this.apiUrl}/core/userprofile`, userprofile, {responseType: "text"}).toPromise()
    .then(res => res.toString()).catch(this.handleErrorPromise);
  }

  private handleErrorPromise (error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }

  getprofile(emailaddress: string): Promise<Userprofile> {
     return  this.http.get(`${this.apiUrl}/core/userprofile/` + emailaddress).toPromise()
    .then(res =>  res["user"] as Userprofile).catch(this.handleErrorPromise);
  }

  hasuserprofile(emailaddress: string): Promise<boolean> {
    return  this.http.get(`${this.apiUrl}/core/hasuserprofile/` + emailaddress).toPromise()
   .then(res =>  res as boolean).catch(this.handleErrorPromise);
 }

handleError (error: Response | any) {
  return Observable.throw(error.message || error);
}


}
