import { Component, OnInit } from '@angular/core';
import { Moment } from '../model/moment.model';

@Component({
  selector: 'app-moments',
  templateUrl: './moments.component.html',
  styleUrls: ['./moments.component.css']
})
export class MomentsComponent implements OnInit {

  private moments: Moment[];
  private imageUrl: string;
  private baseUrl: string;
  private images: string[] = [];
  constructor() { }

  ngOnInit() {
    this.moments = [
      {
        cover: 'assets/img/moments/pug.png',
        title: 'My color pencil pug',
        date: '13 May, 2016'
      },
      {
        cover: 'assets/img/moments/sunset.png',
        title: 'My favourite sunset',
        date: '9 Sep, 2016'
      },
      {
        cover: 'assets/img/moments/graduation.png',
        title: 'My graduation',
        date: '16 June, 2016'
      },
      {
        cover: 'assets/img/moments/rainbow.png',
        title: 'My way home with a rainbow',
        date: '14 July, 2016'
      },
      {
        cover: 'assets/img/moments/skydiving.png',
        title: 'My skydiving',
        date: '16 June, 2016'
      },
      {
        cover: 'assets/img/moments/back.png',
        title: 'My time after work',
        date: '17 Jan, 2016'
      },
      {
        cover: 'assets/img/moments/cat.png',
        title: 'My 15-year-old cat in China (2003-2018)',
        date: '15 Sep, 2016'
      },
    ]



    this.images = [
      'pixal',
      'person'
    ]
    this.baseUrl = 'assets/img/moments/'
    this.imageUrl = this.baseUrl + this.images[0] + '.png'
  
    setTimeout(
      () => this.changeImage()
      , 1500);
  }

  changeImage(){
    this.imageUrl = this.baseUrl + this.images[1] + '.png'
  }


}
