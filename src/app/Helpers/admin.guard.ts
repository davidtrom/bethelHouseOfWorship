import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  checkLogin: boolean;

  constructor(private router:Router){

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
  
