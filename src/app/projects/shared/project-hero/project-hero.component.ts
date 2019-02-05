import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/model/project.model';

@Component({
  selector: 'app-project-hero',
  templateUrl: './project-hero.component.html',
  styleUrls: ['./project-hero.component.css']
})
export class ProjectHeroComponent implements OnInit {

  @Input() project: Project;
  constructor() { }

  ngOnInit() {
  }

}
