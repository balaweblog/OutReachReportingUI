import 'rxjs/add/operator/map';
import {Http, Response} from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Skillset } from '../models/skillset';

@Injectable()
export class UtilitiesService {
  apiUrl = 'https://18.220.137.145:3000/api';

  constructor(private http: Http) { }

  getjoblocations(): Observable<Response> {
    return this.http.get(`${this.apiUrl}/utilities/joblocations`).map((res: Response) => { return res.json(); });
  }

  getskillset(): Observable<Skillset[]> {
    return this.http.get(`${this.apiUrl}/utilities/skillset`).map((res: Response) => { return <Skillset[]>res.json().skillsetdetails; });
  }
}
