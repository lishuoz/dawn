import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project.model';
import { ProjectsService } from '../shared/projects.service';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css']
})
export class LeagueComponent implements OnInit {
  project: Project
  nextUrl: string;
  constructor(
    private projectsService: ProjectsService
  ) { }

  ngOnInit() {
    this.project = this.projectsService.find('league')
    this.nextUrl = this.projectsService.getNextUrl('league')
  }

}
