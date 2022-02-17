import { Injectable } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // constructor(public jwtHelper:JwtHelperService) { 
    
  // }
   jwtHelper = new JwtHelperService();
  public isAuthenticated(): boolean {
    console.log("Inside is authenticated");
    let token:any = sessionStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token);
  }
}
