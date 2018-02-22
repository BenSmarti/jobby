import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from './base-http.service';

import { User } from '../../_models/user.model';
import { Employer } from '../../_models/employer.model';
import { Seeker } from '../../_models/seeker.model';

@Injectable()
export class AppHttpService extends BaseHttpService {

  constructor(private http: HttpClient) {
    super();
  }

  login(username: string, password: string): Promise<any> {

    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    return this.http.post(this.apiUrl + '/login', formData)
    .toPromise()
    .then(() => true)
    .catch(() => null);
  }

  registerSeeker(seeker: Seeker): Promise<any> {
    const formData = new FormData();

    for (const value in seeker) {
      formData.append(value, seeker[value]);
    }

    return this.http.post(this.apiUrl + '/Account/RegisterSeeker', formData)
    .toPromise()
    .then(() => true)
    .catch(() => null);
  }

  registerEmployer(employer: Employer): Promise<any> {
    const formData = new FormData();

    for (const value in employer) {
      formData.append(value, employer[value]);
    }

    return this.http.post(this.apiUrl + '/Account/RegisterEmployer', formData)
    .toPromise()
    .then(() => true)
    .catch(() => null);
  }
}
