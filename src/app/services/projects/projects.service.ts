import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
/*Interfaces*/
import { Project } from '../../modules/interfaces/project.interface';
/*HttpReqResModules*/
import { Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ProjectsService {

  readonly projectsUrl ='https://glacial-refuge-10252.herokuapp.com/projects';

  constructor(private http:Http) {
  }


  getById(id:string):Observable<Project>{
    return this.http
                    .get(this.projectsUrl + "/" + id)
                    .map( (response:Response)=> <Project>response.json());
  }
  getAllprojects():Observable<Project[]>{

    return this.http
                    .get(this.projectsUrl)
                    .map( (response:Response)=> <Project[]>response.json());

  }



}
