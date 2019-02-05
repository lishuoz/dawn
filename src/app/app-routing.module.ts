import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MomentsComponent } from './moments/moments.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  { path: 'projects', component: ProjectsComponent },
  { path: 'moments', component: MomentsComponent },
  { path: 'resume', component: ResumeComponent },
  { path: '', redirectTo: '/projects', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
