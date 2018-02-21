import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { User } from '../_models/user.model';

@Injectable()
export class UserSessionService {

  loggedInSubject: Subject<boolean> = new Subject();

  getUser(): any {
    if (sessionStorage.getItem('user')) {
      return JSON.parse(sessionStorage.getItem('user'));
    }

    if (localStorage.getItem('user')) {
      return JSON.parse(localStorage.getItem('user'));
    }

    return null;
  }

  getToken(): string {
    const user = this.getUser();
    return (user && user.accessToken) ? user.accessToken : '';
  }

  isLoggedIn(): boolean {
    return !!this.getUser();
  }

  login(user: User, rememberMe?: boolean): void {
    const userObj = { username: user.username, accessToken: user.accessToken, type: user.type, image: user.image };

    if (rememberMe) {
      localStorage.setItem('user', JSON.stringify(userObj));
    } else {
      sessionStorage.setItem('user', JSON.stringify(userObj));
    }

    this.loggedInSubject.next(true);
  }

  logout(): void {
    if (sessionStorage.getItem('user')) {
      sessionStorage.removeItem('user');
    }

    if (localStorage.getItem('user')) {
      localStorage.removeItem('user');
    }

    this.loggedInSubject.next(false);
  }
}
