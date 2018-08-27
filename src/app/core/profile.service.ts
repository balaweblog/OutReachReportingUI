import { Injectable } from '@angular/core';
import { Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { HttpClient } from '@angular/common/http';
import { Userprofile } from '../models/userprofile';
import { GlobalVariable } from '../global';

@Injectable()
export class ProfileService {
  apiUrl = GlobalVariable.BASE_API_URL;

  constructor(private http: HttpClient) { }

  addprofile(userprofile: Userprofile): Promise<string> {
    return this.http.post(`${this.apiUrl}/core/userprofile`, userprofile, {responseType: "text"}).toPromise()
    .then(res => res).catch(this.handleErrorPromise);
  }

  getprofile(emailaddress: string): Promise<Userprofile> {
     return  this.http.get(`${this.apiUrl}/core/userprofilebyemail/` + emailaddress).toPromise()
    .then(res =>  res as Userprofile).catch(this.handleErrorPromise);
  }

  hasuserprofile(emailaddress: string): Promise<boolean> {
    return  this.http.get(`${this.apiUrl}/core/userprofile/` + emailaddress).toPromise()
   .then(res =>  res as boolean).catch(this.handleErrorPromise);
  }

  getreferencestatus(emailaddress: string, referencename: string, referencenumber: string): Promise<string> {
  return  this.http.get(`${this.apiUrl}/core/userprofilebyreferencestatus/` + emailaddress + "/" + referencename + "/"
   + referencenumber).toPromise()
  .then(res =>  res as string).catch(this.handleErrorPromise);
  }
  getereferencestatusbyemail(emailaddress:string): Promise<string> {
  return  this.http.get(`${this.apiUrl}/core/userprofilebyreferencestatusemail/` + emailaddress).toPromise()
  .then(res => res as string).catch(this.handleErrorPromise);
  }

  private handleError (error: Response | any) {
    return Observable.throw(error.message || error);
  }
  private handleErrorPromise (error: Response | any) {
    return Promise.reject(error.message || error);
  }

 validate(Userprofile) {
    if (Userprofile.fullname === undefined || Userprofile.fullname === '' ||
      Userprofile.contactnumber === undefined || Userprofile.contactnumber === '' ||
      Userprofile.emailaddress === undefined || Userprofile.emailaddress === '' ||
      Userprofile.experience === undefined || Userprofile.experience === '' ||
      Userprofile.salaryexpectationmin === undefined || Userprofile.salaryexpectationmin === '' ||
      Userprofile.salaryexpectationmax === undefined || Userprofile.salaryexpectationmax === '' ||
      Userprofile.lastworkingday === undefined || Userprofile.lastworkingday === '' ||
      Userprofile.location === undefined || Userprofile.location.length < 1 ||
      Userprofile.noticeperiod === undefined || Userprofile.noticeperiod === '' ||
      Userprofile.referencename === undefined || Userprofile.referencename === '' ||
      Userprofile.skillset === undefined || Userprofile.skillset.length < 1 ||
      Userprofile.referencenumber === '' || Userprofile.referencenumber === undefined) {
  		return 'All fileds are Required';
  	}
  	return '';
  }
}
