import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginError : string; 
  loginForm = new FormGroup({
    email: new FormControl('', 
    [Validators.email,
     Validators.required]
    ),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(5),
    ]),
  })

  constructor(private authService : AuthService,private router : Router) { }


  doLogin(){
    this.authService.login(this.loginForm.value).finally(() => {
      if (this.authService.error){
        this.loginError = this.authService.error;
      }
    })
  }

  ngOnInit() {
  }

}
