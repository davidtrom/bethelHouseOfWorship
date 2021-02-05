import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../Services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  checkLogin: boolean;

  constructor(private router:Router){
    // this.authService.getLoginStatus().subscribe(data => 
    //   this.checkLogin = data)

    if(sessionStorage.getItem("username") == "pastorAdminBHOW"){
      this.checkLogin = true;
    }
    else {
      this.checkLogin = false;
    }
  }
  
  canActivate(){
    console.log("OnlyLoggedInUsers");
    if (this.checkLogin) {
      return true;
    } else {
        this.router.navigate(['/pastor-login']);
        window.alert("You don't have permission to view this page");
      return false;
    
    }
  }
}
    // next: ActivatedRouteSnapshot,
    // state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return this.authService.getLoginStatus()
  
