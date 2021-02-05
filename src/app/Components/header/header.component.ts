import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  collapsed: boolean = true;
  pastorLoggedIn: boolean;
  subscription: Subscription;

  constructor(private authService:AuthenticationService) { }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(){
    this.subscription = this.authService.getLoginStatus().subscribe(data => {this.pastorLoggedIn = data;});
    console.log("in header first check" + this.pastorLoggedIn);
    if(!this.pastorLoggedIn){
      if(sessionStorage.getItem("username") == "pastorAdminBHOW" && sessionStorage.getItem("token") != null) {
        this.pastorLoggedIn = true;
        console.log("in header check 2" + this.pastorLoggedIn);
      }
    }
  }

  collapse(): boolean{
    if(this.collapsed === true){
      this.collapsed = false;
    }
    else{
      this.collapsed = true;
    }
    return this.collapsed;
  }

  logOut(): boolean{
    this.pastorLoggedIn = false;
    this.authService.logOut();
    this.authService.setUserLoggedIn(false);
    return this.collapse();
  }

}
