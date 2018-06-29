import { Component, OnInit } from '@angular/core';
import {UserService}  from '../../services/user/user.service';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userService:UserService;
  constructor(private http:HttpClient) {
    this.userService = UserService.getInstance(this.http);
  }

  ngOnInit() {
  }

  isAuthenticated():boolean{
    return this.userService.isAuthenticated();
  }

}
