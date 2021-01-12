import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  }

  constructor(private http: HttpClient) { }

  verifyPastor(username:string, password:string){
    //let reqData: Object = {"username":username, "password": password};
    console.log(this.loginUrl);
    return this.http.post<any>(this.loginUrl, {username, password}, this.httpOptions)
      .pipe(map(userData => {
        console.log("verifying ", userData);
        sessionStorage.setItem('username', username);
        console.log("authentication service jwt: " + userData.jwt);
        console.log("authentication service token: " + userData.token);
        //let tokenStr = 'Bearer ' + userData.token;
        let tokenStr = 'Bearer ' + userData.token;
        //let tokenStr = 'Bearer ' + "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwYXN0b3JBZG1pbkJIT1ciLCJleHAiOjE2MDk3MTA5MjEsImlhdCI6MTYwOTY5MjkyMX0.JHG7dxTbqepVubpxtwueqVMuxD2KWvvNShtQ0QjXFWIyqd-w-cotwEty-fpAy_khCG9wNQZxY6iVJfifQ6TUlQ";

        //sessionStorage.setItem('token', tokenStr);
        sessionStorage.setItem('token', 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwYXN0b3JBZG1pbkJIT1ciLCJpYXQiOjE2MTA0MDIzMTh9.OLAg8ZtNRgtVu62A-8GncW25SgXOhCUWWXLYIr4sg2IuE579ba9xOkjL4WL5s0gqA2F2E8ExCYzLI4xjKJhRjw');
        console.log(sessionStorage.getItem('token'));
        return userData;
      }
      ))
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("username");
    console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem("username");
    sessionStorage.removeItem('token')
  }
}
