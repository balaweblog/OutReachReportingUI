import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Skillset } from '../models/skillset';
import { GlobalVariable } from '../global';

@Injectable()
export class UtilitiesService {
  apiUrl = GlobalVariable.BASE_API_URL;

  constructor(private http: HttpClient) { }

  getjoblocations(): Observable<any[]> {
    return this.http.get(`${this.apiUrl}/utilities/joblocations`).map(res => <any[]> res);
  }

  getskillset(): Observable<Skillset[]> {
    return this.http.get(`${this.apiUrl}/utilities/skillset`).map(res => <Skillset[]> res);
  }
}
