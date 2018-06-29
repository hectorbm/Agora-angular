import { Injectable } from '@angular/core';
import { HttpHeaders,HttpResponse, HttpClient} from '@angular/common/http';
import { UserLogin, UserSignUp,UserData} from '../../modules/DataInterfaces/user.interface';
import { Observable } from 'rxjs/Observable';
import { Project } from '../../modules/DataInterfaces/project.interface';

@Injectable()

export class UserService {
  private readonly loginUrl = "https://glacial-refuge-10252.herokuapp.com/users/login";
  private readonly signUpUrl = "https://glacial-refuge-10252.herokuapp.com/users";
  private readonly logoutUrl="https://glacial-refuge-10252.herokuapp.com/users/me/token";
  private readonly getVotesUrl = "https://glacial-refuge-10252.herokuapp.com/users/me/myVotes";
  private userProfile:UserData;
  private headersWithoutToken = new HttpHeaders({
  'Content-Type': 'application/json'
  });
  private http:HttpClient;
  private static instance:UserService;

  private constructor (httpClient:HttpClient){
    this.http = httpClient;
  }
// Get instance
  public static getInstance(http:HttpClient):UserService{
    if (UserService.instance == null){
      UserService.instance = new UserService (http);
    }
    return UserService.instance;
}
  getUserProfile():UserData{
    return this.userProfile;
  }
  setUserProfile(user:UserData){
    this.userProfile = user;
  }
//Login user
  loginMyUser(user:UserLogin):Observable<HttpResponse<Object>> {
    let headers = this.headersWithoutToken;
    return this.http.post<HttpResponse<Object>>(this.loginUrl,user,{ headers, observe:'response' });
  }
//Sign up
  signUpUser(user:UserSignUp):Observable<HttpResponse<Object>>{
    let headers = this.headersWithoutToken;
    return this.http.post<HttpResponse<Object>>(this.signUpUrl,user,{observe:'response'});
  }
//Chech Authentication
  isAuthenticated():boolean{
    return localStorage.getItem("X-Auth-token")!=null ;
  }
//Log out
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
//Get Votes
 getMyVotes():Observable<HttpResponse<Project[]>>{
   if(this.isAuthenticated()){
     let headers = new HttpHeaders({
     'Content-Type': 'application/json',
     'X-Auth': localStorage.getItem('X-Auth-token')
     });

     return this.http.get<HttpResponse<Project[]>>(this.getVotesUrl,{headers});
   }
    return null;
 }
}
