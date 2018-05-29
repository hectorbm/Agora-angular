import { Injectable } from '@angular/core';
import { UserSignUp } from '../../../modules/interfaces/userSignup';
import { HttpHeaders, HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class SignupService {

    usuarioprueba:UserSignUp={
     "email":"hector2222@hotmail.com",
     "password":"johndoe1234",
     "firstName":"johnd",
     "middleName":"carrotd",
     "lastName":"goodmaisond",
     "idNumber":14512110
  };

  readonly signUpUrl = "https://glacial-refuge-10252.herokuapp.com/users";

    constructor(private http:HttpClient) {
    }

    signUpUser():Observable<HttpResponse<Object>>{

      let body = JSON.stringify(this.usuarioprueba);
      let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post<HttpResponse<Object>>(this.signUpUrl,this.usuarioprueba,{observe:'response'});
    }

  }
