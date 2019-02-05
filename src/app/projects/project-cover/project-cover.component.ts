import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/model/project.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-cover',
  templateUrl: './project-cover.component.html',
  styleUrls: ['./project-cover.component.css']
})
export class ProjectCoverComponent implements OnInit {

  private showOverlay: boolean
  @Input() project: Project
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.showOverlay = false;
  }

}
