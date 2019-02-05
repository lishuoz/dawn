import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../shared/projects.service';
import { Project } from 'src/app/model/project.model';

@Component({
  selector: 'app-easydonate',
  templateUrl: './easydonate.component.html',
  styleUrls: ['./easydonate.component.css']
})
export class EasydonateComponent implements OnInit {
  private project: Project
  private nextUrl: string;
  constructor(
    private projectsService: ProjectsService
  ) { }

  ngOnInit() {
    this.project = this.projectsService.find('easydonate')
    this.nextUrl = this.projectsService.getNextUrl('easydonate')
  }

}
