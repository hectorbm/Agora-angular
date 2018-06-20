import { Component, OnInit } from '@angular/core';
import { Project } from '../DataInterfaces/project.interface';
import { ProjectsService } from '../../services/projects/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  totalProjects:number;
  errorStatus404:boolean=false;
  projects:Project[]=[];
  constructor(private projectsService:ProjectsService) {
    this.totalProjects = 0;
    this.getAllProjects();
  }

  ngOnInit() {

  }
  getAllProjects(){
    this.projectsService.getAllprojects(this.totalProjects,20).subscribe( response =>{
      let resp:Project[]=response;
      this.projects = this.projects.concat(resp);
      this.totalProjects += 20;
    }, error =>{
      if (error.status == 404 ){
        this.errorStatus404=true;
      }
    } );
  }


}
