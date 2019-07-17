import { Component, OnInit } from '@angular/core';
import { Moment } from '../model/moment.model';

@Component({
  selector: 'app-moments',
  templateUrl: './moments.component.html',
  styleUrls: ['./moments.component.css']
})
export class MomentsComponent implements OnInit {

  moments: Moment[];
  constructor() { }

  ngOnInit() {
    this.moments = [
      {
        cover: 'assets/img/moments/nicks.png',
        title: 'My cute cat, Nicks',
        date: 'Oct 26, 2017'
      },
      {
        cover: 'assets/img/moments/pug.png',
        title: 'My color pencil pug',
        date: 'May 13, 2016'
      },
      {
        cover: 'assets/img/moments/sunset.png',
        title: 'My favourite sunset',
        date: 'Sep 9, 2016'
      },
      {
        cover: 'assets/img/moments/graduation.png',
        title: 'My graduation',
        date: 'June 16, 2016'
      },
      {
        cover: 'assets/img/moments/rainbow.png',
        title: 'My way home with a rainbow',
        date: 'July 14, 2016'
      },
      {
        cover: 'assets/img/moments/skydiving.png',
        title: 'My skydiving',
        date: 'June 16, 2016'
      },
      {
        cover: 'assets/img/moments/back.png',
        title: 'My time after work',
        date: 'Jan 17, 2016'
      },
      {
        cover: 'assets/img/moments/cat.png',
        title: 'My 15-year-old cat in China (2003-2018)',
        date: 'Sep 15, 2016'
      },
    ]
  }

}
