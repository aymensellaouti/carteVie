import { Component, OnInit } from '@angular/core';
import { Cv } from '../model/cv';
import { Logger } from '../../services/logger.service';
import { HelperService } from '../../services/helper.service';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  /*   selectedCv: Cv = null; */
  nbre = 0;
  constructor(private cvService: CvService) {}

  ngOnInit(): void {
    this.cvService.selectItemSubject
      .pipe(distinctUntilChanged())
      .subscribe((cv) => {
        this.nbre++;
      });
  }
  /*   getSelectedCv(selectedCv: Cv) {
    this.selectedCv = selectedCv;
  } */
}
