import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MomentsComponent } from './moments/moments.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { PasswordComponent } from './password/password.component';

const routes: Routes = [
  { path: 'projects', component: ProjectsComponent },
  { path: 'moments', component: MomentsComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'password', component: PasswordComponent },
  { path: '', redirectTo: '/projects', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
