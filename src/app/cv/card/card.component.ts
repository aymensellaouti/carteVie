import { Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cv } from '../model/cv';
import { EmbaucheService } from '../services/embauche.service';
import { CvService } from '../services/cv.service';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit /*, OnChanges, DoCheck*/ {
  @Input() cv: Cv = null;
  constructor(
    private embaucheService: EmbaucheService,
    private toastr: ToastrService,
    private cvService: CvService
  ) {}
  ngOnInit(): void {
    this.cvService.selectItemSubject
      .pipe(distinctUntilChanged())
      .subscribe((cv) => (this.cv = cv));
  }
  embaucher() {
    if (this.embaucheService.embaucher(this.cv)) {
      this.toastr.success(`Félicitations, vous venez d'être pré selectionné`);
    } else {
      this.toastr.warning(`Vous êtes déjà pré selectionné`);
    }
  }
  /*   ngDoCheck(): void {
    console.log('doCheck');
  }

  ngOnChanges(data) {
    console.log(data);
  } */
}
