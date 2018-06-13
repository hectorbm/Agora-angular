import { Component, OnInit } from '@angular/core';
import { UserSignUp } from '../../DataInterfaces/user.interface';
import { UserService } from '../../../services/user/user.service';

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
  constructor(private userService:UserService) {
      this.user = new UserSignUp();
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

      },error=>{
        this.succesfulSignUp=false;
        this.errorOnSignUp=true;
        this.onSignUp=false;
      });

  }

}
