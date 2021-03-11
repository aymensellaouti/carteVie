import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  cvs: Cv[] = [];
  @Output() forwardSelectedCv = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    this.cvs = [
      new Cv(1, 'sellaouti', 'aymen', 'dev', 'as.jpg', 38, 123456),
      new Cv(2, 'test', 'test', 'dev', 'rotating_card_profile.png', 38, 123456),
    ];
  }

  forwardCv(selectedCv: Cv) {
    this.forwardSelectedCv.emit(selectedCv);
  }
}
