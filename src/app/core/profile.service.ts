import { Injectable } from '@angular/core';
import { Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { HttpClient } from '@angular/common/http';

import { Userprofile } from '../models/userprofile';


@Injectable()
export class ProfileService {

  //apiUrl = 'https://ec2-18-222-187-103.us-east-2.compute.amazonaws.com:3000/api';
 apiUrl = 'https://localhost:3000/api';

  constructor(private http: HttpClient) { }

  addprofile(userprofile: Userprofile): Promise<string> {
    return this.http.post(`${this.apiUrl}/core/userprofile`, userprofile, {responseType: "text"}).toPromise()
    .then(res => res).catch(this.handleErrorPromise);
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
  private handleErrorPromise (error: Response | any) {
    return Promise.reject(error.message || error);
  }
  
  validate(Userprofile){
  	if(Userprofile.fullname == undefined ||
  	  Userprofile.contactnumber == undefined ||
  	  Userprofile.emailaddress == undefined ||
  	  Userprofile.experience == undefined ||
  	  Userprofile.salaryexpectationmin == undefined ||
  	  Userprofile.salaryexpectationmax == undefined || 
  	  Userprofile.lastworkingday == undefined || 
  	  Userprofile.location == undefined || 
  	  Userprofile.noticeperiod == undefined || 
  	  Userprofile.referencename == undefined || 
  	  Userprofile.referencenumber == undefined){
  		return 'All fileds are Required';
  	}
  	
  	return '';
  }
}
