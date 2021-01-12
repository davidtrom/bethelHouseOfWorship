import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../Services/authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        console.log(sessionStorage.getItem('username'));
        console.log(sessionStorage.getItem('token'));
    if (sessionStorage.getItem('username') && sessionStorage.getItem('token')) {
      req = req.clone({
        setHeaders: {
          Accept: 'application/json',
         'Content-Type': 'application/json',
          Authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
      })
    }
    (console.log(sessionStorage.getItem('username') + " " + sessionStorage.getItem('token')))
    return next.handle(req);
  }

    // intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //     // add authorization header with jwt token if available
    //     let currentUser = this.authenticationService.currentUserValue;
    //     if (currentUser && currentUser.token) {
    //         request = request.clone({
    //             setHeaders: {
    //                 Authorization: `Bearer ${currentUser.token}`
    //             }
    //         });
    //     }

    //     return next.handle(request);
    // }
}