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
    this.isPastorLoggedIn$ = new BehaviorSubject<boolean>(false)
   }

  verifyPastor(username:string, password:string){
    return this.http.post<any>(this.loginUrl, {username, password})
      .pipe(map(userData => {
        console.log("verifying ", userData);
        sessionStorage.setItem('username', username);
        console.log("authentication service jwt: " + userData.jwt);
        let tokenStr = 'Bearer ' + userData.token;
        sessionStorage.setItem('token', tokenStr);
        console.log(sessionStorage.getItem('token'));
        this.setUserLoggedIn();
        console.log("Pastor Logged In? " + this.isPastorLoggedIn$);
        return userData;
      }
      ))
  }

  setUserLoggedIn() {
    if((sessionStorage.getItem("username") != null) && (sessionStorage.getItem("token") != null)){
      this.isPastorLoggedIn$.next(true);
    }
    else{
      this.isPastorLoggedIn$.next(false);
    }
  }

  getLoginStatus(): Observable<boolean> {
    return this.isPastorLoggedIn$.asObservable();
  }

  logOut() {
    sessionStorage.clear();
    // sessionStorage.removeItem("username");
    // sessionStorage.removeItem('token');
  }
}
