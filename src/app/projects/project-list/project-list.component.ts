import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project.model';
import { ProjectsService } from '../shared/projects.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects: Project[];
  constructor(
    private projectsService: ProjectsService
  ) { }

  ngOnInit() {
    this.projects = this.projectsService.projects;
  }

}
