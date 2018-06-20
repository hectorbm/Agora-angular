import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
/*Interfaces*/
import { Project } from '../../modules/DataInterfaces/project.interface';
/*Observables para los HttpRequest*/
import {Observable} from 'rxjs/Observable';
/*HttpClient para los Request*/
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {UserService}  from '../../services/user/user.service';

@Injectable()
export class ProjectsService {

  readonly projectsUrl ='https://glacial-refuge-10252.herokuapp.com/projects';

  constructor(private http:HttpClient,private userService:UserService) {
  }

//Get project by Id(id:String) returns an observable!
  getById(id:string):Observable<Project>{
    return this.http
                    .get<Project>(this.projectsUrl + "/" + id);
  }

  getAllprojects(total:number,limit:number):Observable<Project[]>{
  let url:string = this.projectsUrl + "/" + total + "/" + limit;
  return this.http.get<Project[]>(url);
}

//Just vote favor or against!
  vote(projectId:string,vote:string){
    if (this.userService.isAuthenticated() && (vote==='favor' || vote==='against')){
      const headers = new HttpHeaders({
        'Content-Type':'text/plain',
        'x-auth': localStorage.getItem('X-Auth-token')
    });

    let voteUrl:string = this.projectsUrl + "/" + projectId + "/" + vote;
      this.http.patch(voteUrl,null,{headers}).subscribe();
    }
  }



}
