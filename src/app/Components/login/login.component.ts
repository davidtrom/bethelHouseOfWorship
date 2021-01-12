import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formNotValid: boolean;
  loginForm :FormGroup;
  invalidLogin: boolean = false;
  

  constructor(private fb:FormBuilder, private authService:AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      pastorUsername: ['', Validators.required],
      pastorPassword: ['', Validators.required]
    });
  }

  get form() { return this.loginForm.controls; }

  onSubmit(): void{
    this.authService.verifyPastor(this.loginForm.controls.pastorUsername.value, this.loginForm.controls.pastorPassword.value).subscribe(data =>{
      console.log("logging in ", data);
      
      // if(this.authService.isUserLoggedIn()){
      //   this.router.navigate(['/pastor-dashboard']);
      // }
      // else {
      //   this.loginProblem = true;
      // }
    })
    this.invalidLogin = true;
    //this.router.navigate(['/pastor-dashboard']);
  }

}
