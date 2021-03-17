import { Injectable } from '@angular/core';
import { Cv } from '../model/cv';

@Injectable({
  providedIn: 'root',
})
export class EmbaucheService {
  private embauchees: Cv[] = [];
  constructor() {}

  getEmbauchees(): Cv[] {
    return this.embauchees;
  }

  embaucher(cv: Cv) {
    if (!this.embauchees.some((cvItem) => cvItem === cv)) {
      this.embauchees.push(cv);
      return true;
    } else {
      return false;
    }
  }

  deleteEmbauche(cv: Cv) {
    const index = this.embauchees.indexOf(cv);
    if (index == -1) {
      return false;
    } else {
      this.embauchees.splice(index, 1);
      return true;
    }
  }
}
