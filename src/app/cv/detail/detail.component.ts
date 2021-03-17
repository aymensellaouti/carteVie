import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cv } from '../model/cv';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  personne: Cv = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService: CvService,
    private router: Router,
    private toaster: ToastrService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.personne = this.cvService.findCvById(params.id);
      if (!this.personne) {
        this.router.navigate(['cv']);
      }
    });
    this.activatedRoute.queryParams.subscribe((params) => {
     console.log(params);
    });
  }

  deleteCv() {
    if (this.cvService.deleteCv(this.personne)) {
      this.toaster.success('Cv Supprimé avec succès :D');
      this.router.navigate(['cv']);
    } else {
      this.toaster.error(`veuillez contacter l'admin ${this.personne.id}`);
    }
  }
}
