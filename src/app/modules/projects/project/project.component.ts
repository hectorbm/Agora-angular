import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../interfaces/project.interface';
import { ProjectsService } from '../../../services/projects/projects.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})

export class ProjectComponent implements OnInit {

  id:string;
  project:Project;
  constructor(private activatedRoute:ActivatedRoute,private projectsService:ProjectsService) {
    this.activatedRoute.params.subscribe( params=>
        this.id=params['id']
      );

  }


  ngOnInit() {
    this.getProject(this.id);
  }

  getProject(id:string){
    this.projectsService.getById(id).subscribe( response => this.project = response
    );

  }

}
