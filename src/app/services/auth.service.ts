import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, tap } from 'rxjs';
import { User } from 'src/app/classes/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  API_URL = 'api/auth/';

  get token(): string {
    return localStorage.getItem('token') || '';
  }

  constructor(private http: HttpClient, private router: Router) {
    this._isLoggedIn$.next(!!this.token);
  }

  createUser(user: User) {
    return this.http.post<string>(this.API_URL + 'registration', user).pipe(
      tap((response: any) => {
        this._isLoggedIn$.next(true)
        localStorage.setItem('token', response.token)
      })
    )
  }

  loginUser(user: User) {
    return this.http.post<string>(this.API_URL + 'login', user).pipe(
      tap((response: any) => {
        this._isLoggedIn$.next(true)
        localStorage.setItem('token', response.token)
      })
    )
  }
}
