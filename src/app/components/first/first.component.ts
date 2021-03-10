import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  name = 'aymen';
  isHidden = false;
  color = 'green';
  message = 'hide';
  constructor() {}

  ngOnInit(): void {}
  showHide(inputValue: string) {
    this.isHidden = !this.isHidden;
    this.message === 'hide' ? (this.message = 'show') : (this.message = 'hide');
    console.log(inputValue);
  }
}
