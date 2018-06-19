import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Jobresult } from '../models/jobresult';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';



@Injectable()
export class JobService {
  apiUrl = 'https://localhost:3000/api';

  constructor(private http: Http) { }


  getjobs(skillset: any[]): Observable<Jobresult[]> {
    return this.http.get(`${this.apiUrl}/core/jobs/` + skillset).map((res:Response) => {return <Jobresult[]>res.json().jobinfo; })
    .catch(this.handleError);

  }
  handleError (error: Response | any) {
    return Observable.throw(error.message || error);
  }

}
