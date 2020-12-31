import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  baseUrl=environment.baseUrl;
  private loginUrl: string = this.baseUrl + "/authenticate";

  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  }

  constructor(private http: HttpClient) { }

  verifyPastor(username:string, password:string): Observable<boolean>{
    return null;
    // let reqData: Object = {"username":username, "password": password};
    // return this.http.post<boolean>(this.loginUrl, reqData, this.httpOptions)
    //   .pipe(map(userData => {
    //     console.log("verifying");
    //     let tokenStr = 'Bearer ' + userData.jwt;
    //     sessionStorage.setItem('token', tokenStr);
    //     return userData;
    //   }
      
    //   }))
  

  }
}
