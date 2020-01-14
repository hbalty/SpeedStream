import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


interface Credentials {
  statut : string, 
  token: string,
}

const HEADERS = {
  'content-type': 'application/json',
  'authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZGVlYTE3Yzg4NDAxMjMzMjQ0ZjhiNDEiLCJpYXQiOjE1NzU5MTk5OTZ9.2ih3CY75Tg6rB-h2ijP8c9TLcx0FBr57OQAGZs7XJQ8`,
};

const BASE_URL = "http://localhost:3000";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false; 

  error : string;

  redirectUrl : string;
  
  constructor(private helper: JwtHelperService, private http : HttpClient, private router : Router){
    this.isLoggedIn = !helper.isTokenExpired(localStorage.getItem('admin_access_token'))
    console.log(this.isLoggedIn)
  }
  
  login(user) {
    return this.http.post<Credentials>(BASE_URL + "/login", user, {
      headers: HEADERS
    })
    .toPromise()
    .then((token) => {

        this.setSession(token.token)
        this.isLoggedIn = true; 
        if (this.redirectUrl){
          this.router.navigateByUrl(this.redirectUrl);
        }else {
          this.router.navigate(['admin'])
        }
    }).catch(err => {
      console.log(err)
      if (err.status === 304){
        this.isLoggedIn = false;
        this.error = 'Incorrect email/password'
      }
    })
  }

  setSession(token){
     localStorage.setItem('admin_access_token',token)
  }

  logout(): void {
    localStorage.removeItem('admin_access_token');
    this.isLoggedIn = false;
  }


}
