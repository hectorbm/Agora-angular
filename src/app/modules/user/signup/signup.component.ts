import { Component, OnInit } from '@angular/core';
import { UserSignUp } from '../../interfaces/userSignup';
import { SignupService } from '../../../services/user/signUp/signup.service';

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
  constructor(private signUpService:SignupService) {
      this.user = new UserSignUp();
   }

  ngOnInit() {
  }

  signUpMyUser(){

      this.onSignUp = true;
      this.succesfulSignUp=false;
      this.errorOnSignUp=false;

      this.signUpService.signUpUser(this.user).subscribe(response=>{
        localStorage.setItem("X-Auth-token",response.headers.get('X-Auth'));
        this.succesfulSignUp=true;

      },error=>{
        this.succesfulSignUp=false;
        this.errorOnSignUp=true;
        this.onSignUp=false;
      });

  }

}
