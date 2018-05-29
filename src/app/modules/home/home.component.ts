import { Component, OnInit } from '@angular/core';
import {IsAuthenticatedService}  from '../../services/user/authenticated/authenticated';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private isAuthenticatedService:IsAuthenticatedService) { }

  ngOnInit() {
  }

  isAuthenticated():boolean{
    return this.isAuthenticatedService.isAuthenticated();
  }

}
