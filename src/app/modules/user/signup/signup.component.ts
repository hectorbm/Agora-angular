import { Component, OnInit } from '@angular/core';
import { UserSignUp } from '../../interfaces/userSignup';
import { SignupService } from '../../../services/user/signUp/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user:UserSignUp;
  succesfulSignUp:boolean=false;
  errorOnSignUp:boolean=false;

  constructor(private signUpService:SignupService) { }

  ngOnInit() {
  }

  signUpMyUser(){
    this.succesfulSignUp=false;
    this.errorOnSignUp=false;
    if (this.signUpService.signUpUser(this.user)){
      this.succesfulSignUp=true;
    }
    else{
      this.errorOnSignUp=true;
    }
  }

}
