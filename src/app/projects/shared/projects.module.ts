import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectListComponent } from '../project-list/project-list.component';
import { ProjectCoverComponent } from '../project-cover/project-cover.component';
import { ProjectsComponent } from '../projects.component';
import { OpenGovernmentComponent } from '../open-government/open-government.component';

import { PlaywalkComponent } from '../playwalk/playwalk.component';
import { ProjectHeroComponent } from './project-hero/project-hero.component';
import { ButtonSectionComponent } from './button-section/button-section.component';
import { HrComponent } from './hr/hr.component';
import { LeagueComponent } from '../league/league.component';
import { FocusComponent } from '../focus/focus.component';
import { WidgetComponent } from '../widget/widget.component';
import { EasydonateComponent } from '../easydonate/easydonate.component';


@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ],
  declarations: [
    ProjectListComponent,
    ProjectCoverComponent,
    ProjectsComponent,
    OpenGovernmentComponent,
    ProjectHeroComponent,
    ButtonSectionComponent,
    PlaywalkComponent,
    HrComponent,
    LeagueComponent,
    FocusComponent,
    WidgetComponent,
    EasydonateComponent
  ],
})
export class ProjectsModule { }
