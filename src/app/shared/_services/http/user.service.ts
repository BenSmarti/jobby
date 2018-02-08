import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from './base-http.service';
import { UserSessionService } from '../user-session.service';

import { User } from '../../_models/user.model';

@Injectable()
export class UserService extends BaseHttpService {

  readonly endPoint = this.apiUrl + '/user';

  constructor(private http: HttpClient, userSession: UserSessionService) {
    super(userSession);
  }

  getUsers(): Promise<User[]> {
    return this.http.get(this.endPoint, { headers: this.getTokenHeaders() })
    .toPromise()
    .then(response => response as User[]);
  }
}
