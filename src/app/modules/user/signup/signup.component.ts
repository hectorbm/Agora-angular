import { Component, OnInit } from '@angular/core';
import { UserSignUp, UserData } from '../../DataInterfaces/user.interface';
import { UserService } from '../../../services/user/user.service';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  errorOnSignUp: boolean=false;
  succesfulSignUp:boolean=false;
  onSignUp:boolean=false;
  user:UserSignUp;
  userService:UserService;
  constructor(private http:HttpClient) {
      this.user = new UserSignUp();
      this.userService = UserService.getInstance(this.http);
   }

  ngOnInit() {
  }

  signUpMyUser(){

      this.onSignUp = true;
      this.succesfulSignUp=false;
      this.errorOnSignUp=false;

      this.userService.signUpUser(this.user).subscribe(response=>{
        localStorage.setItem("X-Auth-token",response.headers.get('X-Auth'));
        this.succesfulSignUp=true;
        this.userService.setUserProfile(<UserData>response.body);
      },error=>{
        this.succesfulSignUp=false;
        this.errorOnSignUp=true;
        this.onSignUp=false;
      });

  }

}
