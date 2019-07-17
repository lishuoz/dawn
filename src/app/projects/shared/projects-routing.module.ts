import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OpenGovernmentComponent } from '../open-government/open-government.component';
import { ProjectsComponent } from '../projects.component';
import { PlaywalkComponent } from '../playwalk/playwalk.component';
import { LeagueComponent } from '../league/league.component';
import { FocusComponent } from '../focus/focus.component';
import { EasydonateComponent } from '../easydonate/easydonate.component';
import { HumpdayComponent } from '../humpday/humpday.component';
import { PasswordCheckGuard } from 'src/app/password-check.guard';

const routes: Routes = [
  {
    path: 'projects',
    children: [
      { path: '', component: ProjectsComponent },
      { path: 'league', component: LeagueComponent },
      { path: 'open-government', component: OpenGovernmentComponent },
      { path: 'playwalk', component: PlaywalkComponent },
      { path: 'focus', component: FocusComponent },
      { path: 'easydonate', component: EasydonateComponent },
      {
        path: 'humpday',
        component: HumpdayComponent,
        canActivate: [PasswordCheckGuard],
        data: {url: 'humpday'}
      },
      { path: '**', component: ProjectsComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
