import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formNotValid: boolean;
  loginForm :FormGroup;
  

  constructor(private fb:FormBuilder, private authService:AuthenticationService ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      pastorUsername: ['', Validators.required],
      pastorPassword: ['', Validators.required]
    });
  }

  get form() { return this.loginForm.controls; }

  onsubmit(): void{
    // this.authService.
  }

}
