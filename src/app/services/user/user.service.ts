import { Injectable } from '@angular/core';
import { UserLogin,UserSignUp } from '../../modules/DataInterfaces/user.interface';
import {Project} from '../../modules/DataInterfaces/project.interface';
import { HttpHeaders, HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  readonly loginUrl = "https://glacial-refuge-10252.herokuapp.com/users/login";
  readonly signUpUrl = "https://glacial-refuge-10252.herokuapp.com/users";
  readonly logoutUrl="https://glacial-refuge-10252.herokuapp.com/users/me/token";
  readonly getVotesUrl = "https://glacial-refuge-10252.herokuapp.com/users/me/myVotes";

  constructor(private http:HttpClient) { }

  loginMyUser(user:UserLogin):Observable<HttpResponse<Object>> {
        let headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
        return this.http.post<HttpResponse<Object>>(this.loginUrl,user,{ headers, observe:'response' });
  }

  signUpUser(user:UserSignUp):Observable<HttpResponse<Object>>{
    //set headers
    let headers = new Headers({
    'Content-Type': 'application/json'
  });

  return this.http.post<HttpResponse<Object>>(this.signUpUrl,user,{observe:'response'});
  }

  isAuthenticated():boolean{
    if (localStorage.getItem("X-Auth-token")!=null){
      return true;
    }
      return false;
  }
  logoutMyUser(){
    if (this.isAuthenticated()){
      //set headers
      let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Auth': localStorage.getItem('X-Auth-token')
      });

    this.http.delete(this.logoutUrl,{headers}).subscribe();
    localStorage.removeItem('X-Auth-token');
  }
 }
 getMyVotes():Observable<HttpResponse<Project[]>>{
   if(this.isAuthenticated){
     let headers = new HttpHeaders({
     'Content-Type': 'application/json',
     'X-Auth': localStorage.getItem('X-Auth-token')
     });
     return this.http.get<HttpResponse<Project[]>>(this.getVotesUrl,{headers});
   }
   else
    return null;
 }

}
