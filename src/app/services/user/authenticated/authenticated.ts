import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpResponse} from '@angular/common/http';
@Injectable()
export class IsAuthenticatedService {

  readonly logoutUrl="https://glacial-refuge-10252.herokuapp.com/users/me/token";
  constructor(private http:HttpClient) {  }

  isAuthenticated():boolean{

    if (localStorage.getItem("X-Auth-token")!=null){
      return true;
    }
    else {
      return false;
    }
  }
  logoutMyUser(){

    if (this.isAuthenticated()){
      let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Auth': localStorage.getItem('X-Auth-token')
      });
    this.http.delete(this.logoutUrl,{headers}).subscribe();
    localStorage.removeItem('X-Auth-token');
  }

}
}
