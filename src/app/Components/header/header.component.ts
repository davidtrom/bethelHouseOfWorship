import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed: boolean = true;
  isLoggedIn: boolean;

  constructor(private authService:AuthenticationService) { }

  ngOnInit(){
    this.checkLoginStatus();
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

  checkLoginStatus(){
    if(sessionStorage.getItem('username') != null){
      this.isLoggedIn = true;
    }
    else this.isLoggedIn = false;
  }

  logOut(): boolean{
    this.authService.logOut();
    return this.collapse();
  }

}
