import { Component, OnInit, Input } from '@angular/core';
import { Moment } from 'src/app/model/moment.model';

@Component({
  selector: 'app-moment-item',
  templateUrl: './moment-item.component.html',
  styleUrls: ['./moment-item.component.css']
})
export class MomentItemComponent implements OnInit {

  @Input() moment: Moment;

  constructor() { }

  ngOnInit() {
  }

}
