import { Component, OnInit } from '@angular/core';
import { Project } from '../DataInterfaces/project.interface';
import { ProjectsService } from '../../services/projects/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  errorStatus404:boolean=false;
  projects:Project[];
  constructor(private projectsService:ProjectsService) {
    this.getAllprojects();
  }

  ngOnInit() {

  }
  getAllprojects(){
    this.projectsService.getAllprojects().subscribe( response =>{
      this.projects = response;
    }, error =>{
      if (error.status == 404 ){
        this.errorStatus404=true;
      }
    } );
  }


}
