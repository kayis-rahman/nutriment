import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';

import {JwtHelperService} from '@auth0/angular-jwt';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Login} from '../modal/Login';
import {Register} from '../modal/Register';
import {LoginResponse} from '../modal/LoginResponse';

@Injectable({
  providedIn: 'root'
})
export class IdentityService {

  private static readonly REST_API_URI = environment.restApi + environment.configContextPath + 'api';
  private readonly jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient) {
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (token !== 'undefined' || token !== null) {
      return !this.jwtHelper.isTokenExpired(token);
    } else {
      return false;
    }
  }

  verifyUser(login: Login): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${IdentityService.REST_API_URI}/auth/login`, login);

  }

  storeUserInfo(login: Login, token: string): Observable<boolean> {
    localStorage.setItem('token', token);
    localStorage.setItem('username', login.username || "");
    return of(true);
  }

  logout(): Observable<boolean> {
    localStorage.setItem('token', '');
    localStorage.setItem('username', '');
    return of(true);
  }

  getUserName(): string | null {
    return localStorage.getItem('username') ;
  }

  getToken(): string | null {
    return localStorage.getItem('token') ;
  }

  register(register: Register): Observable<Register> {
    return this.http.post<Register>(`${IdentityService.REST_API_URI}/auth/register`, register);
  }
}
