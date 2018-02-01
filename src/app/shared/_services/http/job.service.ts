import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from './base-http.service';
import { UserSessionService } from '../user-session.service';

import { Job } from '../../_models/job.model';

@Injectable()
export class JobService extends BaseHttpService {

  readonly endPoint = this.apiUrl + '/job';

  constructor(private http: HttpClient, userSession: UserSessionService) {
    super(userSession);
  }

  getJobs(): Promise<Job[]> {
    return this.http.get(this.endPoint)
    .toPromise()
    .then(response => response as Job[]);
  }

  getEmployerJobs(type: string): Promise<Job[]> {
    const options = { headers: this.getTokenHeaders(), params: { type: type } };

    return this.http.get(this.endPoint + '/byEmployer', options)
    .toPromise()
    .then(response => response as Job[]);
  }
}
