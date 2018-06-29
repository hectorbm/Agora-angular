import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user/user.service';
import {HttpClient} from '@angular/common/http';
import { UserData } from '../../DataInterfaces/user.interface';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userService:UserService;
  userName:string;
  constructor(private router:Router,private http:HttpClient) {
    this.userService = UserService.getInstance(this.http);
    if (this.isAuthenticated){

    }
   }

  ngOnInit() {
  }
  getUserName(){
    if (this.isAuthenticated()){
    this.userName = this.userService.getUserProfile().firstName;
    }
    return this.userName;
  }

  isAuthenticated():boolean{
    return this.userService.isAuthenticated();
  }
  toLogout(){
    this.userService.logoutMyUser();
  }


}
