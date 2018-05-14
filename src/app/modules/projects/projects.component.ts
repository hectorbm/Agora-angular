import { Component, OnInit } from '@angular/core';
import { Project } from '../interfaces/project.interface';
import { ProjectsService } from '../../services/projects/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  readonly allProjectsUrl ='https://glacial-refuge-10252.herokuapp.com/projects/5af11057f7cb6970e9dfefaa';
  projects:Project[];
  constructor(private projectsService:ProjectsService) {
    this.getAllprojects();
  }

  ngOnInit() {

  }
  getAllprojects(){
    this.projectsService.getAllprojects().subscribe( response => this.projects = response );
  }


}
