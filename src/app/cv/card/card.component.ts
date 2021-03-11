import { Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit /*, OnChanges, DoCheck*/ {
  @Input() cv: Cv;
  constructor() {}
  ngOnInit(): void {}
  /*   ngDoCheck(): void {
    console.log('doCheck');
  }

  ngOnChanges(data) {
    console.log(data);
  } */
}
