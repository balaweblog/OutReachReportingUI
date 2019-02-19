import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { GlobalVariable } from '../global';

@Injectable()
export class UtilitiesService {
  apiUrl = GlobalVariable.BASE_API_URL;

  constructor(private http: HttpClient) { }

  getloca(): Observable<any[]> {
    return this.http.get(`${this.apiUrl}/test/test`).map(res => <any[]> res);
  }
}
