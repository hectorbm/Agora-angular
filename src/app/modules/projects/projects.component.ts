import { Component, OnInit } from '@angular/core';
import { Project } from '../interfaces/project.interface';
import { ProjectsService } from '../../services/projects/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  
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
