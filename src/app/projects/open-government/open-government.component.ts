import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project.model';
import { ProjectsService } from '../shared/projects.service';

@Component({
  selector: 'app-open-government',
  templateUrl: './open-government.component.html',
  styleUrls: ['./open-government.component.css']
})
export class OpenGovernmentComponent implements OnInit {
  private project: Project
  private nextUrl: string;
  constructor(
    private projectsService: ProjectsService
  ) { }

  ngOnInit() {
    this.project = this.projectsService.find('open-government')
    this.nextUrl = this.projectsService.getNextUrl('open-government')
  }

}
