import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Jobresult } from '../models/jobresult';
import { AppliedJob } from '../models/appliedjob';
import { PreloadAllModules } from '@angular/router';
import { GlobalVariable } from '../global';

@Injectable()
export class JobService {
  apiUrl = GlobalVariable.BASE_API_URL;

  constructor(private http: HttpClient) { }

  getjobs(skillset: any[], emailaddress: string, experience: string, minsalary:string, maxsalary:string
  , location: any[]): Observable<Jobresult[]> {
    return this.http.get(`${this.apiUrl}/core/job/` + skillset  + '/' + emailaddress + '/' + experience + '/' +
     minsalary + "/" + maxsalary + "/" + location)
    .map(res => <Jobresult> res)
    .catch(this.handleError);
  }
  handleError (error: Response | any) {
    return Observable.throw(error.message || error);
  }
  applyjob(appliedjob: AppliedJob): Promise<string> {
    return this.http.post(`${this.apiUrl}/core/appliedjob`, appliedjob, {responseType: "text"}).toPromise()
    .then(res => res).catch(this.handleErrorPromise);
  }
  getappliedjobbyemail(emailaddress: string): Observable<AppliedJob[]> {
   return this.http.get(`${this.apiUrl}/core/appliedjob/` + emailaddress)
    .map(res => <AppliedJob> res)
   .catch(this.handleError);
 }
 getappliedjobbyjobid(jobid: string): Observable<Jobresult[]> {
  return this.http.get(`${this.apiUrl}/core/job/` + jobid)
    .map(res => <Jobresult[]> res)
  .catch(this.handleError);
}
deletejobbyjobid(jobid: string): Promise<string> {
 return this.http.delete(`${this.apiUrl}/core/appliedjob/` + jobid).toPromise().then(e => <string>e).catch(this.handleErrorPromise);
}
hasappliedjobbyemail(email: string): Promise<Boolean> {
  return this.http.get(`${this.apiUrl}/core/appliedjobbyemail/` + email).toPromise().then(e => <Boolean>e).catch(this.handleErrorPromise);
 }
  private handleErrorPromise (error: Response | any) {
    return Promise.reject(error.message || error);
  }

  validate(usersearch) {
  	if (usersearch.skillSet.length === 0 ||
  	  usersearch.experience === undefined ||
  	  usersearch.salaryExpectation === undefined ||
      usersearch.salaryExpectationTo === undefined ||
      usersearch.location.length === 0 ) {

  		return 'All fileds are Required';
  	}
  	return '';
  }

}
