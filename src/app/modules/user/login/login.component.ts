import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../../interfaces/userLogin';
import { LoginService } from '../../../services/user/login/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:UserLogin;
  errorOnLogin: boolean=false;
  succesfulLogin:boolean=false;

  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit() {
  }

  toLogin(){
    this.succesfulLogin=false;
    this.errorOnLogin=false;
    this.loginService.loginMyUser().subscribe(response=>{
            console.log(response.headers.keys());
            console.log(response.headers.get("X-Auth")
            this.succesfulLogin=true;
            this.router.navigate(['home']);
          },error=>{
            console.log(error);
            this.succesfulLogin=false;
            this.errorOnLogin=true;
          });
  }


}
