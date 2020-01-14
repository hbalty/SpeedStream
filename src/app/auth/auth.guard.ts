import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private jwtHelper: JwtHelperService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      let url: string = state.url; 
      return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    let loggedIn = false ; 
    if (this.authService.isLoggedIn) { 
      const access_token = localStorage.getItem('admin_access_token');
      if (access_token){
        loggedIn = !this.jwtHelper.isTokenExpired(access_token)
      }
      if (loggedIn){
        return true;
      }
    }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    // Navigate to the login page with extras
    this.router.navigate(['/login']);
    return true;
  }


}
