import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from './base-http.service';
import { UserSessionService } from '../user-session.service';

import { Job } from '../../_models/job.model';
import { User } from '../../_models/user.model';
import { Employer } from '../../_models/employer.model';

@Injectable()
export class EmployerService extends BaseHttpService {

  readonly endPoint = this.apiUrl + '/employer';

  constructor(private http: HttpClient, userSession: UserSessionService) {
    super(userSession);
  }

  getJobs(): Promise<Job[]> {
    return this.http.get(this.endPoint + '/candidate', { headers: this.getTokenHeaders() })
    .toPromise()
    .then(response => response as Job[]);
  }

  getUsers(): Promise<User[]> {
    return this.http.get(this.endPoint + '/user', { headers: this.getTokenHeaders() })
    .toPromise()
    .then(response => response as User[]);
  }

  getEmployers(): Promise<Employer[]> {
    return this.http.get(this.endPoint, { headers: this.getTokenHeaders() })
    .toPromise()
    .then(response => response as Employer[]);
  }
}
