import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CryptoService {

  apiUrl = 'https://ec2-18-220-137-145.us-east-2.compute.amazonaws.com:3000/api';

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

