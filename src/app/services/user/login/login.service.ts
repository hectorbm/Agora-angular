import { Injectable } from '@angular/core';
import { UserLogin } from '../../../modules/interfaces/userLogin';
import { HttpHeaders, HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class LoginService {

  usuarioprueba:UserLogin={
   "email":"ignaciodelmont@gmail.com",
   "password":"macanatest91"
 }
readonly loginUrl = "https://glacial-refuge-10252.herokuapp.com/users/login";

  constructor(private http:HttpClient) { }

  loginMyUser():Observable<HttpResponse<Object>>{
        //let body = JSON.stringify(this.usuarioprueba);
        let headers = new HttpHeaders({
        'Content-Type': 'application/json',
          'X-Auth':''
        });

        return this.http.post(this.loginUrl,this.usuarioprueba,{observe:'response'});
  }



}
