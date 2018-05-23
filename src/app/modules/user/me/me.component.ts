import { Component, OnInit } from '@angular/core';
import {UserMe} from '../../interfaces/me.interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit {

  user:UserMe;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  isAuthenticated():boolean{

    return true;
  }
  toMyVotes(){
    this.router.navigate(['home']);
  }

}
