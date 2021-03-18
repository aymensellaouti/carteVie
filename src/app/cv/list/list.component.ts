import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Cv } from '../model/cv';
import { CvService } from '../services/cv.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  cvs$: Observable<Cv[]>;
  /*   @Output() forwardSelectedCv = new EventEmitter(); */
  constructor(
    private cvService: CvService,
    private toaster: ToastrService
  ) {}

  ngOnInit(): void {
    this.cvs$ = this.cvService.getCvs().pipe(
      catchError(() => {
        this.toaster.warning(`Problème de connexion, les données sont fake, veuillez contacter l'admin`);
        return of(this.cvService.getFakeCvs());
      }));
  }

  /*   forwardCv(selectedCv: Cv) {
    this.forwardSelectedCv.emit(selectedCv);
  } */
}
