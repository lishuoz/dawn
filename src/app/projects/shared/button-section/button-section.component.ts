import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-section',
  templateUrl: './button-section.component.html',
  styleUrls: ['./button-section.component.css']
})
export class ButtonSectionComponent implements OnInit {
  @Input() nextUrl: string;

  constructor() { }

  ngOnInit() {
  }

}
