import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
/*Interfaces*/
import { Project } from '../../modules/interfaces/project.interface';
/*Observables para los HttpRequest*/
import {Observable} from 'rxjs/Observable';
/*HttpClient para los Request*/
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProjectsService {

  readonly projectsUrl ='https://glacial-refuge-10252.herokuapp.com/projects';

  constructor(private http:HttpClient) {
  }


  getById(id:string):Observable<Project>{
    return this.http
                    .get<Project>(this.projectsUrl + "/" + id);
  }
  getAllprojects():Observable<Project[]>{

    return this.http
                    .get<Project[]>(this.projectsUrl);
  }



}
