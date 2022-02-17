import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  authenticate_url="http://localhost:8084/authorization"

  constructor(private http:HttpClient) {  }

  generateToken(credentials: any){
    return this.http.post(`${this.authenticate_url}/login`,credentials);
  }
  // validate()
  // {
  //   let token=sessionStorage.getItem("token");
  //   if(token==undefined||token==''||token==null){
  //     return false;
  //   }
  //   else{
  //     if(this.http.get(`${this.authenticate_url}/validate`))
  //     {
  //       return true
  //     }
  //     return true;
  //   }
  // }

  //login user

  loginUser(token: string,userId : string){
    sessionStorage.setItem("token",token);
    
    return true;
  }
  isLoggedIn(){
    let token=sessionStorage.getItem("token");
    if(token==undefined||token==''||token==null){
      return false;
    }
    else{
      return true;
    }
  }
  getToken(){
    return sessionStorage.getItem("token");
  }
  logOut(){
    sessionStorage.removeItem("token");
  }
}
