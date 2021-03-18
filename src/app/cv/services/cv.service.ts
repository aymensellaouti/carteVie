import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Cv } from '../model/cv';
import { params } from '../../generics';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private cvs: Cv[] = [];
  selectItemSubject = new Subject<Cv>();
  constructor(private http: HttpClient) {
    this.cvs = [
      new Cv(1, 'sellaouti', 'aymen', 'dev', 'as.jpg', 38, 123456),
      new Cv(2, 'test', 'test', 'dev', '', 38, 123456),
      new Cv(3, 'test', 'test', 'dev', '             ', 38, 123456),
    ];
  }
  getFakeCvs(): Cv[] {
    return this.cvs;
  }
  getCvs(): Observable<Cv[]> {
    return this.http.get<Cv[]>(params.CV_API);
  }

  findFakeCvById(id: number): Cv {
    return this.cvs.find((cv) => cv.id === +id);
  }
  findCvById(id: number): Observable<Cv> {
    return this.http.get<Cv>(params.CV_API + id);
  }

  findCvByIdAndName(id: number, name: string): Cv {
    return this.cvs.find((cv) => cv.id === +id && cv.name === name);
  }
  deleteCv(id: number): Observable<unknown> {
/*     const httpParams = new HttpParams().set(
      'access_token',
      localStorage.getItem('token')
    ); */
    return this.http.delete<unknown>(params.CV_API + id);
  }
  deleteFakeCv(cv: Cv): boolean {
    const index = this.cvs.indexOf(cv);
    if (index === -1) {
      return false;
    } else {
      this.cvs.splice(index, 1);
      return true;
    }
  }

  addFakeCv(cv: Cv) {
    cv.id = this.cvs[this.cvs.length - 1].id + 1;
    this.cvs.push(cv);
  }

  addCv(cv: Cv): Observable<Cv> {

    return this.http.post<Cv>(params.CV_API, cv);
  }

  selectItem(cv: Cv) {
    this.selectItemSubject.next(cv);
  }
}
