import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../../interfaces/userLogin';
import { LoginService } from '../../../services/user/login/login.service';
import {Router} from '@angular/router';
import {IsAuthenticatedService} from '../../../services/user/authenticated/authenticated';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:UserLogin;
  errorOnLogin: boolean=false;
  succesfulLogin:boolean=false;
  onLogin:boolean=false;
  constructor(private isAuthenticatedService:IsAuthenticatedService,private loginService:LoginService,private router:Router) {
    this.user = new UserLogin();
  }

  ngOnInit() {
  }

  toLogin(){
    this.onLogin=true;
    this.succesfulLogin=false;
    this.errorOnLogin=false;
    this.loginService.loginMyUser(this.user).subscribe(response=>{

            localStorage.setItem("X-Auth-token",response.headers.get('X-Auth'));
            this.succesfulLogin=true;
            this.router.navigate(['home']);
          },error=>{
            console.log(error);
            this.succesfulLogin=false;
            this.onLogin=false;
            this.errorOnLogin=true;
          });
  }
  isAuthenticated():boolean{
    return this.isAuthenticatedService.isAuthenticated();
  }


}
