import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { customHeaders } from 'src/app/api/customHeaders';
import { SignUpRequest } from 'src/app/interfaces/SignUpRequest';
import { UserInfo } from 'src/app/interfaces/UserInfo';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  signup(user: SignUpRequest): Observable<boolean | string> {
    return new Observable<boolean>((observer) => {
      this.http.post('/api/auth/signup', user, customHeaders).subscribe(
        (res: any) => {
          if (res?.message === 'User registered successfully!') {
            observer.next(true);
          } else {
            observer.next(res?.data?.error);
          }
          observer.complete();
        },
        (error) => {
          observer.error(error);
          observer.complete();
        }
      );
    });
  }
  constructor(private http: HttpClient, public jwtHelper: JwtHelperService) {}

  login(user: UserInfo): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      this.http.post('/api/auth/login', user, customHeaders).subscribe(
        (res: any) => {
          if (res?.accessToken) {
            localStorage.setItem('access_token', res?.accessToken);
            observer.next(true);
          } else {
            observer.next(false);
          }
          observer.complete();
        },
        (error) => {
          observer.error(error);
          observer.complete();
        }
      );
    });
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('access_token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  public logout() {
    setTimeout(() => {
      localStorage.removeItem('access_token');
      window.location.href = '/login';
    }, 1000);
  }
}
