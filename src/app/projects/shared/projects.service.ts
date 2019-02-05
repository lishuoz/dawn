import { Injectable } from '@angular/core';
import { Project } from 'src/app/model/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[];

  constructor() {
    this.projects = [
      {
        title: 'League UX Research',
        client: 'League Inc',
        cover: 'assets/img/league/cover.png',
        url: 'league'
      },
      {
        title: 'Open Government Web Design',
        client: 'City of Toronto',
        cover: 'assets/img/open-government/cover.png',
        url: 'open-government'
      },
      {
        title: 'Playwalk Mobile Design',
        client: 'Playwalk',
        cover: 'assets/img/playwalk/cover.png',
        url: 'playwalk'
      },
      {
        title: 'Focus Mobile Design',
        client: 'IOS Project',
        cover: 'assets/img/focus/cover.png',
        url: 'focus'
      },
      {
        title: 'Easy Donate Platform',
        client: 'Peking University Web Product Hackathon 2013',
        cover: 'assets/img/easydonate/cover.png',
        url: 'easydonate'
      },
    ];
  }

  find(url){
    return this.projects.find(
      p => {
        return p.url == url
      }
    )
  }

  getNextUrl(url){
    let index = this.projects.findIndex(
       p => {
         return p.url == url
       }
    )
    if( index == this.projects.length - 1 ){
      return this.projects[0].url
    }
    return this.projects[index+1].url
  }
}
