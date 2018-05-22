import { Injectable } from '@angular/core';
import { UserSignUp } from '../../../modules/interfaces/userSignup';
import {HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable()
export class SignupService {

  statusOk:boolean=false;
    usuarioprueba:UserSignUp={
     "email":"hector2@hotmail.com",
     "password":"johndoe1234",
     "firstName":"john",
     "middleName":"carrot",
     "lastName":"goodmaison",
     "idNumber":14512109
  };
  readonly signUpUrl = "https://glacial-refuge-10252.herokuapp.com/users";
  constructor(private httpClient:HttpClient) {
  }

    signUpUser(user:UserSignUp):boolean{

      const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':''
    });

      this.httpClient.post(this.signUpUrl,this.usuarioprueba, { headers , observe:'response'}).subscribe(response=>{
        this.statusOk = true;
        console.log(response);

      },error=>{
        this.statusOk = false;
        console.log(error);
      });



      return this.statusOk;
    }
  }
