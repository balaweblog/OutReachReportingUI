import 'rxjs/add/operator/map';
import {Http, Response} from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Skillset } from '../models/skillset';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UtilitiesService {
  apiUrl = 'https://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getjoblocations(): Observable<Response> {
    return this.http.get(`${this.apiUrl}/utilities/joblocations`).map((res: Response) => { return res; });
  }

  getskillset(): Observable<Skillset[]> {
    return this.http.get(`${this.apiUrl}/utilities/skillset`).map((res: Response) => { return <Skillset[]>res["skillsetdetails"]; });
  }
}
