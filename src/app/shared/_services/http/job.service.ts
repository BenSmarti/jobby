import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from './base-http.service';
import { UserSessionService } from '../user-session.service';

import { Job } from '../../_models/job.model';
import { Select2OptionData } from 'ng2-select2';

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

  newJob(job: Job): Promise<boolean> {
    return this.http.post(this.endPoint, { job: job }, this.getTokenRequest())
    .toPromise()
    .catch((response) => (response.status === 201))
    .then(() => true);
  }

  getEmployerJobs(type: string): Promise<Job[]> {
    const options = { headers: this.getTokenHeaders(), params: { type: type } };

    return this.http.get(this.endPoint + '/byEmployer', options)
    .toPromise()
    .then(response => response as Job[]);
  }

  getCategories(): Promise<Select2OptionData[]> {
    return this.http.get(this.endPoint + '/category')
      .toPromise()
      .then(response => response as Select2OptionData[]);
  }
}
