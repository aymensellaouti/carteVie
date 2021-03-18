import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { params } from '../../generics';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test-http-client',
  templateUrl: './test-http-client.component.html',
  styleUrls: ['./test-http-client.component.css'],
})
export class TestHttpClientComponent implements OnInit {
  todos$: Observable<unknown>;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.todos$ = this.http.get(params.API_TEST);
    /* .subscribe((data) => console.log(data)); */
  }
}
