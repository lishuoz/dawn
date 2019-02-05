import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MomentsComponent } from '../moments.component';
import { MomentItemComponent } from '../moment-item/moment-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MomentsComponent,
    MomentItemComponent,
  ]
})
export class MomentsModule { }
