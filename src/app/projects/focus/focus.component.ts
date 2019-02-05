import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../shared/projects.service';
import { Project } from 'src/app/model/project.model';

@Component({
  selector: 'app-focus',
  templateUrl: './focus.component.html',
  styleUrls: ['./focus.component.css']
})
export class FocusComponent implements OnInit {
  private project: Project
  private nextUrl: string;
  constructor(
    private projectsService: ProjectsService
  ) { }

  ngOnInit() {
    this.project = this.projectsService.find('focus')
    this.nextUrl = this.projectsService.getNextUrl('focus')
  }

}
