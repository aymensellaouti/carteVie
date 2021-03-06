import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { params } from '../generics';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  isAuthenticated() {
    return !!localStorage.getItem('token');
  }
  login(credentials): Observable<{ id: string }> {
    return this.http.post<{ id: string }>(params.AUTH_API, credentials);
  }
  logout() {
    localStorage.removeItem('token');
  }
}
