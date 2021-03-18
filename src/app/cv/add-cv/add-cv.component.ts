import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/cv.service';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.css'],
})
export class AddCvComponent implements OnInit {
  constructor(
    private cvService: CvService,
    private toaster: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  addPersonne(cv: Cv) {
    this.cvService.addCv(cv).subscribe(
      (cv) => {
        this.toaster.success(
          `${cv.firstname} ${cv.name} a été ajouté avec succès`
        );
        this.router.navigate(['cv']);
      },
      (erreur) => {
        this.toaster.error(`Veuillez contacter l'admin`);
      }
    );
  }
}
