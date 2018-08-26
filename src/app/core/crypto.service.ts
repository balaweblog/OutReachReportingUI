import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { GlobalVariable } from '../global';


@Injectable()
export class CryptoService {

  apiUrl = GlobalVariable.BASE_API_URL;

  constructor(private http: Http) { }

  encrypt(inputtext: string): Promise<string> {
    return  this.http.get(`${this.apiUrl}/account/encrypt/` + inputtext).toPromise()
    .then(res => res.toString()).catch(this.handleErrorPromise);
  }

  decrypt(ciphertext: string): Observable<any> {
    return  this.http.get(`${this.apiUrl}/account/decrypt/` + ciphertext).map(res => { return res.json(); }).
    catch(this.handleError);
  }

  private handleErrorPromise (error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
}
  handleError (error: Response | any) {
    return Observable.throw(error.message || error);
  }
}

