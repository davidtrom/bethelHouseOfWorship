import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export class User {
  constructor(public status: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  baseUrl=environment.baseUrl;
  private loginUrl: string = this.baseUrl + "/authenticate";
  private isPastorLoggedIn$: BehaviorSubject<boolean>;

  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  }

  constructor(private http: HttpClient) {
    this.isPastorLoggedIn$ = new BehaviorSubject<boolean>(false);
   }

  verifyPastor(username:string, password:string){
    return this.http.post<any>(this.loginUrl, {username, password})
      .pipe(map(userData => {
        console.log("verifying ");
        sessionStorage.setItem('username', username);
        // console.log("authentication service jwt: " + userData.jwt);
        sessionStorage.setItem("token", userData.jwt);
        // console.log("Token: " + sessionStorage.getItem('token'));
        if((sessionStorage.getItem("username") != null) && (sessionStorage.getItem("token") != null)){
          this.setUserLoggedIn(true);
        }
        console.log("Pastor Logged In? " + this.isPastorLoggedIn$);
        return userData;
      }
      ))
  }

  setUserLoggedIn(status:boolean) {
    this.isPastorLoggedIn$.next(status);
  }

  getLoginStatus(): Observable<boolean> {
    return this.isPastorLoggedIn$;
  }

  logOut() {
    sessionStorage.clear();
  }
}
