import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project.model';
import { ProjectsService } from '../shared/projects.service';

@Component({
  selector: 'app-humpday',
  templateUrl: './humpday.component.html',
  styleUrls: ['./humpday.component.css']
})
export class HumpdayComponent implements OnInit {

  project: Project
  nextUrl: string;
  numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  constructor(
    private projectsService: ProjectsService
  ) { }

  ngOnInit() {
    this.project = this.projectsService.find('humpday')
    this.nextUrl = this.projectsService.getNextUrl('humpday')
  }

}
