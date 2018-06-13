import { Component, OnInit } from '@angular/core';
import {UserData} from '../../DataInterfaces/user.interface';
import{Project} from '../../DataInterfaces/project.interface'
import {Router} from '@angular/router';
import {UserService} from '../../../services/user/user.service';
@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit {

  user:UserData={lastName :"buena maizon",email:"hectorbuenamaizon@gmail.com",firstName:"hector",middleName:"gabriel",idNumber:39286107};
  myProjects:any;
  constructor(private router:Router,private userService:UserService) {
    this.toMyVotes();
  }

  ngOnInit() {
  }

  isAuthenticated():boolean{

    return true;
  }
  toMyVotes(){
    this.userService.getMyVotes().subscribe(response=>{

      this.myProjects = response;

    },error=>{
      console.log(error);
    });
  }

}
