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
  user:UserSignUp;
  constructor(private signUpService:SignupService) { }

  ngOnInit() {
  }

  signUpMyUser(){
    this.succesfulSignUp=false;
    this.errorOnSignUp=false;
    this.signUpService.signUpUser().subscribe(response=>{
      console.log(response.headers.keys());
      this.succesfulSignUp=true;

    },error=>{
      console.log(error);
      this.succesfulSignUp=false;
      this.errorOnSignUp=true;
    });
  }

}
