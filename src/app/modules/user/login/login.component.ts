import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../../DataInterfaces/user.interface';
import { UserService} from '../../../services/user/user.service';
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
  onLogin:boolean=false;
  constructor(private userService:UserService,private router:Router) {
    this.user = new UserLogin();
  }

  ngOnInit() {
  }

  toLogin(){
    this.onLogin=true;
    this.succesfulLogin=false;
    this.errorOnLogin=false;
    this.userService.loginMyUser(this.user).subscribe(response=>{

            localStorage.setItem("X-Auth-token",response.headers.get('X-Auth'));
            this.succesfulLogin=true;
            this.router.navigate(['home']);
            console.log(response.body);
          },error=>{
          //  console.log(error);
            this.succesfulLogin=false;
            this.onLogin=false;
            this.errorOnLogin=true;
          });
  }
  isAuthenticated():boolean{
    return this.userService.isAuthenticated();
  }


}
