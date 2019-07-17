import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project.model';
import { ProjectsService } from '../shared/projects.service';

@Component({
  selector: 'app-playwalk',
  templateUrl: './playwalk.component.html',
  styleUrls: ['./playwalk.component.css']
})
export class PlaywalkComponent implements OnInit {
  project: Project
  nextUrl: string;
  interviews;
  constructor(
    private projectsService: ProjectsService
  ) { }

  ngOnInit() {
    this.project = this.projectsService.find('playwalk')
    this.nextUrl = this.projectsService.getNextUrl('playwalk')
    console.log(this.nextUrl)
    this.interviews = [
      {
        initials: 'GC',
        relationship: 'Participated in Play the walk in 2013'
      },
      {
        initials: 'MS',
        relationship: 'Landscape architect. familiar with Playwalk. Never experienced it'
      },
      {
        initials: 'JL',
        relationship: 'Artist, illustrator based in Toronto'
      },
      {
        initials: 'PK',
        relationship: 'French teacher'
      },
      {
        initials: 'SL',
        relationship: 'University of Toronto (UofT) student, familiar with Playwalk'
      },
      {
        initials: 'MC',
        relationship: 'UofT student, French teacher, familiar with Toronto'
      },
      {
        initials: 'OM',
        relationship: 'Design Consultant, coordinator, and artist participated in Playwalk 2013'
      },

    ]

   }

}
