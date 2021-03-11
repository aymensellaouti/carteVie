import { Component, OnInit } from '@angular/core';
import { Cv } from '../model/cv';
import { Logger } from '../../services/logger.service';
import { HelperService } from '../../services/helper.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  selectedCv: Cv = null;
  constructor(
    private logger: Logger,
    private helper: HelperService,
    private toaster: ToastrService
  ) {}

  ngOnInit(): void {
    this.logger.logger('cc from cvComponent');
    this.helper.whoAmI();
    this.toaster.info('cc');
  }
  getSelectedCv(selectedCv: Cv) {
    this.selectedCv = selectedCv;
  }
}
