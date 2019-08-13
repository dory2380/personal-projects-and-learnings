import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = new BehaviorSubject(false);

  constructor(private http: HttpClient) { }


  login(username: string, password: string) {
    if (!!username && !!password) {
      // this.isLoggedIn.next(true);
      this.http.post('http://localhost:3000/login', { username, password })
      .subscribe(() => {
          this.isLoggedIn.next(true);
      });
    }
  }

  logout() {
    this.isLoggedIn.next(false);
  }
}
