import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from './base-http.service';

import { User } from '../../_models/user.model';
import {Employer} from '../../_models/employer.model';
import {Seeker} from '../../_models/seeker.model';

@Injectable()
export class AppHttpService extends BaseHttpService {

  constructor(private http: HttpClient) {
    super();
  }

  login(username: string, password: string): Promise<string | boolean> {
    return this.http.post(this.apiUrl + '/login', { username: username, password: password })
    .toPromise()
    .catch((response) => (response.status === 200))
    .then(response => response['token']);
  }

  register(user: User, object: Employer | Seeker): Promise<any> {
    return this.http.post(this.apiUrl + '/register', { user: user, object: object })
    .toPromise()
    .then(response => response)
    .catch(response => console.log(response.code));
  }
}
