import { Injectable } from '@angular/core';
import { UserLogin } from '../../../modules/interfaces/userLogin';
import { HttpHeaders, HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class LoginService {

  usuarioprueba:UserLogin={
   "email":"hector2222@hotmail.com",
   "password":"johndoe1234"
 }
readonly loginUrl = "https://glacial-refuge-10252.herokuapp.com/users/login";

  constructor(private http:HttpClient) { }

  loginMyUser():Observable<HttpResponse<Object>>{
        let body = JSON.stringify(this.usuarioprueba);
        let headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
        return this.http.post<HttpResponse <Object> >(this.loginUrl,body,{headers,observe:'response'});
  }

}
