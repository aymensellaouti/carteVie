import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cv } from '../model/cv';
import { EmbaucheService } from '../services/embauche.service';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css'],
})
export class EmbaucheComponent implements OnInit {
  embauchees: Cv[] = [];
  constructor(
    private embaucheService: EmbaucheService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.embauchees = this.embaucheService.getEmbauchees();
  }
  deleteEmbauche(cv: Cv) {
    this.embaucheService.deleteEmbauche(cv);
    this.toastr.success('Vous avez été désembuaché');
  }
}
