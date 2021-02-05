import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  currentUser: string;
  amILoggedIn: boolean;

    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        // console.log(sessionStorage.getItem('username'));
        // console.log(sessionStorage.getItem('token'));
        // if (sessionStorage.getItem("username") == "pastorAdminBHOW" && sessionStorage.getItem("token") != null) {
        //   this.amILoggedIn = true;
        //   console.log("jwtInterceptor amILoggedIn: " + this.amILoggedIn);
        // }
      if (sessionStorage.getItem("username") == "pastorAdminBHOW" && sessionStorage.getItem("token") != null) {
      req = req.clone({
        setHeaders: {
          Accept: 'application/json',
         'Content-Type': 'application/json',
          Authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
      })
    }
    return next.handle(req);
  }
}