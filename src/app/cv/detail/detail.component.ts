import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Cv } from '../model/cv';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit, OnDestroy {
  personne: Cv = null;
  deleteSubscription: Subscription;
  findSubscription: Subscription;
  constructor(
    private activatedRoute: ActivatedRoute,
    private cvService: CvService,
    private router: Router,
    private toaster: ToastrService
  ) {}
  ngOnDestroy(): void {
    this.deleteSubscription.unsubscribe();
    this.findSubscription.unsubscribe();
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.findSubscription = this.cvService.findCvById(params.id).subscribe(
        (cv) => {
          this.personne = cv;
        },
        (erreur) => {
          this.router.navigate(['cv']);
        }
      );
    });
    /*     this.activatedRoute.queryParams.subscribe((params) => {
     console.log(params);
    }); */
  }

  deleteCv() {
    this.deleteSubscription = this.cvService
      .deleteCv(this.personne.id)
      .subscribe(
        (success) => {
          this.toaster.success('Cv Supprimé avec succès :D');
          this.router.navigate(['cv']);
        },
        (error) => {
          this.toaster.error(`veuillez contacter l'admin ${this.personne.id}`);
          console.log(error);
        }
      );
  }
}
