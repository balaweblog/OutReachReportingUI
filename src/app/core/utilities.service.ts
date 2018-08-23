import 'rxjs/add/operator/map';
import { Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { Skillset } from '../models/skillset';

@Injectable()
export class UtilitiesService {
  //apiUrl = 'https://ec2-18-222-187-103.us-east-2.compute.amazonaws.com:3000/api';
  apiUrl = 'https://localhost:3000/api';


  constructor(private http: HttpClient) { }

  getjoblocations(): Observable<any[]> {
    return this.http.get(`${this.apiUrl}/utilities/joblocations`).map(res => <any[]> res);
  }

  getskillset(): Observable<Skillset[]> {
    return this.http.get(`${this.apiUrl}/utilities/skillset`).map(res => <Skillset[]> res);
  }
}
