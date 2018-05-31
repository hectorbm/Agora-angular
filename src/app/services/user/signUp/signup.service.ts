import { Injectable } from '@angular/core';
import { UserSignUp } from '../../../modules/interfaces/userSignup';
import { HttpHeaders, HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class SignupService {

  readonly signUpUrl = "https://glacial-refuge-10252.herokuapp.com/users";

    constructor(private http:HttpClient) {
    }

    signUpUser(user:UserSignUp):Observable<HttpResponse<Object>>{
      let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post<HttpResponse<Object>>(this.signUpUrl,user,{observe:'response'});
    }

  }
