import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IsAuthenticatedService } from '../../../services/user/authenticated/authenticated';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private isAuthenticatedService:IsAuthenticatedService,private router:Router) { }

  ngOnInit() {
  }

  isAuthenticated():boolean{
    return this.isAuthenticatedService.isAuthenticated();
  }
  toLogout(){
    this.isAuthenticatedService.logoutMyUser();
  }

}
