import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../../interfaces/userLogin';
import { LoginService } from '../../../services/user/login/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:UserLogin;

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

  toLogin(){
    this.loginService.loginMyUser(this.user);
  }


}
