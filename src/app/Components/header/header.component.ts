import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed: boolean = true;
  pastorLoggedIn: boolean;

  constructor(private authService:AuthenticationService) { }

  ngOnInit(){
    this.authService.getLoginStatus().subscribe(data => {this.pastorLoggedIn = data;});
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
    this.authService.logOut();
    this.authService.setUserLoggedIn(false);
    return this.collapse();
  }

}
