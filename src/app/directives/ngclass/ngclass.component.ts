import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css'],
})
export class NgclassComponent implements OnInit {
  isOn = false;
  constructor() {}

  ngOnInit(): void {}
  onOff() {
    this.isOn = !this.isOn;
  }
}
