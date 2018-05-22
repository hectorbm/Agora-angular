import { Injectable } from '@angular/core';
import { UserLogin } from '../../../modules/interfaces/userLogin';
import { HttpHeaders, HttpClient } from '@angular/common/http';


@Injectable()
export class LoginService {

  usuarioprueba:UserLogin={
   "email":"hector@hotmail.com",
   "password":"johndoe1234"
 }
readonly loginUrl = "https://glacial-refuge-10252.herokuapp.com/users/login";

  constructor(private httpClient:HttpClient) { }

  loginMyUser(user:UserLogin){
        let headers = new HttpHeaders({
        
        'Authorization':'',
        'Content-Type': 'application/json'

      });

        this.httpClient.post(this.loginUrl,this.usuarioprueba,{headers, observe:'response'}).subscribe(response=>{

          console.log(response.headers.keys());


        },error=>{
          console.log(error);
        });
  }


}
