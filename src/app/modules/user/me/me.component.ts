import { Component } from '@angular/core';
import {UserData} from '../../DataInterfaces/user.interface';
import{Project} from '../../DataInterfaces/project.interface'
import {UserService} from '../../../services/user/user.service';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent {

  userOption:string;
  userService:UserService;
  user:UserData;
  myProjects:any;

  constructor(private http:HttpClient) {
    this.userService = UserService.getInstance(this.http);
    if (this.userService.isAuthenticated()){
      this.user = this.userService.getUserProfile();
      this.getMyVotes();
    }
  }

  isAuthenticated():boolean{
    return this.userService.isAuthenticated();
  }

  setOption(opt:string){
    this.userOption = opt;
  }

  getMyVotes(){
    this.userService.getMyVotes().subscribe(response=>{
      this.myProjects = response;
    },error=>{
      console.log("error");
    });
  }

}
