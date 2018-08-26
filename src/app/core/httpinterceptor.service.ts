import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { Router } from '@angular/router';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  webtoken: string;

  constructor(private router: Router) {  }
  unauthorised(): Observable<any> {
      this.router.navigate(['/login']);
      return Observable.empty();
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      this.webtoken = "JWT" + " " + window.localStorage.getItem('token');
      const newrequest = request.clone({ setHeaders: {"Authorization": this.webtoken }});
      return next.handle(newrequest).
      map(resp => {
        if (resp instanceof HttpResponse) {
            // console.log(resp.body);
        }
        return resp;
    }).catch(err => {
      console.log(err.status);
      console.log(err.status >= 400);
        if (err.status >= 400 ) {
          return this.unauthorised();
        }
        if (err.message === "Http failure response for (unknown url): 0 Unknown Error") {
            return this.unauthorised();
        }
        console.log(err);
        if (err instanceof HttpResponse) {
            // console.log(err.status);
            //console.log(err.body);
        }
        return Observable.of(err);
    });
  }
}
