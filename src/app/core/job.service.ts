import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Jobresult } from '../models/jobresult';
import { AppliedJob } from '../models/appliedjob';

@Injectable()
export class JobService {
  apiUrl = 'https://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getjobs(skillset: any[]): Observable<Jobresult[]> {
    return this.http.get(`${this.apiUrl}/core/jobs/` + skillset).map((res:Response) => {return <Jobresult[]>res['jobinfo']; })
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
   return this.http.get(`${this.apiUrl}/core/appliedjob/` + emailaddress).map((res:Response) => {
      return <AppliedJob[]>res['appliedjobsdetails']; })
   .catch(this.handleError);
 }
 getappliedjobbyjobid(jobid: string): Observable<Jobresult[]> {
  return this.http.get(`${this.apiUrl}/core/appliedjobs/` + jobid).map((res:Response) => {
     return <Jobresult[]>res['jobinfo']; })
  .catch(this.handleError);
}
  private handleErrorPromise (error: Response | any) {
    return Promise.reject(error.message || error);
  }

}
