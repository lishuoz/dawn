import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {
  private baseUrl = 'assets/img/widget/'
  private images = []
  private imageUrl: string;
  private imageTextUrl: string;
  private index: number;
  private interval;
  constructor() { }

  ngOnInit() {
    this.images = [
      { image: 'paw', text: 'paw-text' },
      { image: 'pug', text: 'pug-text' },
      { image: 'head', text: 'head-text' }
    ]
    this.index = 0
    this.imageUrl = this.baseUrl + this.images[this.index].image + '.png'
    this.imageTextUrl = this.baseUrl + this.images[this.index].text + '.png'

    this.interval = setInterval(
      () => this.changeImage()
      , 5000);
  }

  changeImage() {
    if (this.index < this.images.length - 1) {
      this.imageUrl = this.baseUrl + this.images[++this.index].image + '.png'
      this.imageTextUrl = this.baseUrl + this.images[this.index].text + '.png'
    } else {
      clearInterval(this.interval)
    }
  }

}
