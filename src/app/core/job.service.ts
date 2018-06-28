import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Jobresult } from '../models/jobresult';

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

}
