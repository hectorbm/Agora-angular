import { Injectable } from '@angular/core';
import { UserLogin } from '../../../modules/interfaces/userLogin';
import { HttpHeaders, HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class LoginService {


readonly loginUrl = "https://glacial-refuge-10252.herokuapp.com/users/login";

  constructor(private http:HttpClient) { }

  loginMyUser(user:UserLogin):Observable<HttpResponse<Object>>{
        let headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
        return this.http.post<HttpResponse <Object> >(this.loginUrl,user,{headers,observe:'response'});
  }

}
