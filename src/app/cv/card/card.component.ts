import { Component, Input, OnInit } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() cv: Cv;
  constructor() {}

  ngOnInit(): void {}
}
