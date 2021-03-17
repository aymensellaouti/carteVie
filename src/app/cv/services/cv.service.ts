import { Injectable } from '@angular/core';
import { Cv } from '../model/cv';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private cvs: Cv[] = [];
  constructor() {
    this.cvs = [
      new Cv(1, 'sellaouti', 'aymen', 'dev', 'as.jpg', 38, 123456),
      new Cv(2, 'test', 'test', 'dev', '', 38, 123456),
      new Cv(3, 'test', 'test', 'dev', '             ', 38, 123456),
    ];
  }
  getCvs(): Cv[] {
    return this.cvs;
  }
  findCvById(id: number): Cv {
    return this.cvs.find((cv) => cv.id === +id);
  }
  findCvByIdAndName(id: number, name: string): Cv {
    return this.cvs.find((cv) => cv.id === +id && cv.name === name);
  }
  deleteCv(cv: Cv): boolean {
    const index = this.cvs.indexOf(cv);
    if (index === -1) {
      return false;
    } else {
      this.cvs.splice(index, 1);
      return true;
    }
  }
}
