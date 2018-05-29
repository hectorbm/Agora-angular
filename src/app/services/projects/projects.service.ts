import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
/*Interfaces*/
import { Project } from '../../modules/interfaces/project.interface';
/*Observables para los HttpRequest*/
import {Observable} from 'rxjs/Observable';
/*HttpClient para los Request*/
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {IsAuthenticatedService}  from '../../services/user/authenticated/authenticated';

@Injectable()
export class ProjectsService {

  readonly projectsUrl ='https://glacial-refuge-10252.herokuapp.com/projects';

  constructor(private http:HttpClient,private isAuthenticatedService:IsAuthenticatedService) {
  }


  getById(id:string):Observable<Project>{
    return this.http
                    .get<Project>(this.projectsUrl + "/" + id);
  }
  getAllprojects():Observable<Project[]>{

    return this.http
                    .get<Project[]>(this.projectsUrl);
  }

  vote(projectId:string,vote:string){
    if (this.isAuthenticatedService.isAuthenticated() && (vote==='favor' || vote==='against')){
      const headers = new HttpHeaders({
        'Content-Type':'text/plain',
        'x-auth': localStorage.getItem('X-Auth-token')
    });
    let voteUrl:string = this.projectsUrl + "/" + projectId + "/" + vote;

      this.http.patch(voteUrl,null,{headers})
              .subscribe();
    }
  }



}
