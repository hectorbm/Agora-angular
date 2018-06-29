import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../DataInterfaces/project.interface';
import { ProjectsService } from '../../../services/projects/projects.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})

export class ProjectComponent implements OnInit {


  errorStatus404:boolean=false;
  id:string;
  project:Project;
  public doughnutChartLabels:string[] = ['Against','Favor'];
  public doughnutChartData:number[];
  public doughnutChartType:string = 'doughnut';

  constructor(private activatedRoute:ActivatedRoute,private projectsService:ProjectsService) {
    this.activatedRoute.params.subscribe( params=>
        this.id=params['id']
      );

  }

  ngOnInit() {
    this.getProject(this.id);
  }

  getProject(id:string){
    this.projectsService.getById(id).subscribe( response => {
     this.project = response;
     if (response!=null){
       this.doughnutChartData=[this.project.against,this.project.favor];
    }
    }, error => {
      if (error.status == 404){
        this.errorStatus404=true;
      }
    });

  }

  voteProjectFavor(){
    this.projectsService.vote(this.id,"favor");
  }

    voteProjectAgainst(){
      this.projectsService.vote(this.id,"against");
    }
}
