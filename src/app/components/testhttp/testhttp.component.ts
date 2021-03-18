import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
@Component({
  selector: 'app-testhttp',
  templateUrl: './testhttp.component.html',
  styleUrls: ['./testhttp.component.css'],
})
export class TesthttpComponent implements OnInit {
  constructor(private toaster: ToastrService) {}

  ngOnInit(): void {
    const observable = new Observable<number>((observer) => {
      let i = 5;
      setInterval(() => {
        if (!i) {
          observer.complete();
        }
        observer.next(i--);
      }, 1000);
    });
    observable.subscribe((val) => {
      console.log(val);
    });
    observable
      .pipe(
        map((x) => x * 3),
        filter((x) => x % 2 === 0)
      )
      .subscribe(
        (data) => {
          this.toaster.info('' + data);
        },
        (erreur) => console.log(erreur),
        () => this.toaster.success('Fin du flux')
      );
  }
}
