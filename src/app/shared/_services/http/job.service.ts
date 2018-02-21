import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from './base-http.service';
import { UserSessionService } from '../user-session.service';

import { Job } from '../../_models/job.model';
import { JobSearchCriteria } from '../../_generic/job-search-criteria';
import { Select2OptionData } from 'ng2-select2';

@Injectable()
export class JobService extends BaseHttpService {

  readonly endPoint = this.apiUrl + '/job';

  constructor(private http: HttpClient, userSession: UserSessionService) {
    super(userSession);
  }

  getJobs(params?: JobSearchCriteria): Promise<Job[]> {
    const options = {};
    if (params) {
      options['params'] = params;
    }

    return this.http.get(this.endPoint, options)
    .toPromise()
    .then(response => response as Job[])
    .catch(() => null);
  }

  getJob(id: number): Promise<Job> {
    return this.http.get(this.endPoint + '/' + id)
    .toPromise()
    .then(response => response as Job);
  }

  newJob(job: Job): Promise<boolean> {
    return this.http.post(this.endPoint, { job: job }, this.getTokenRequest())
    .toPromise()
    .then(() => true)
    .catch((response) => (response.status === 201));
  }

  getEmployerJobs(type: string, searchCriteria?: Object): Promise<Job[]> {
    let params = {};
    if (searchCriteria) {
      params = searchCriteria;
    }

    params['type'] = type;

    const options = { headers: this.getTokenHeaders(), params: params };

    return this.http.get(this.endPoint + '/byEmployer', options)
    .toPromise()
    .then(response => response as Job[]);
  }

  getRecommendedJobs(): Promise<Job[]> {
    return this.http.get(this.endPoint + '/recommended', this.getTokenRequest())
    .toPromise()
    .then(response => response as Job[])
    .catch(() => null)
  }

  getCategories(): Promise<Select2OptionData[]> {
    return this.http.get(this.endPoint + '/category')
    .toPromise()
    .then(response => response as Select2OptionData[]);
  }
}
