import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cv } from '../model/cv';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() cv: Cv = null;
  /*   @Output() selectPersonne = new EventEmitter(); */
  @Output() deleteItem = new EventEmitter();
  @Input() size = 50;
  @Input() isDiv = true;
  @Input() isDeleteButton = false;
  constructor(private cvService: CvService) {}

  ngOnInit(): void {}
  selectItem() {
    this.cvService.selectItem(this.cv);
    //this.selectPersonne.emit(this.cv);
  }
  clickOnDeleteButton() {
    this.deleteItem.emit(this.cv);
  }
}
