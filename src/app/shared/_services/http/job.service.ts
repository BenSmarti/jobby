import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from './base-http.service';

import { Job } from '../../_models/job.model';

@Injectable()
export class JobService extends BaseHttpService {

  readonly endPoint = this.apiUrl + '/job';

  constructor(private http: HttpClient) {
    super();
  }

  getJobs(): Promise<Job[]> {
    return this.http.get(this.endPoint).toPromise()
    .then(response => response as Job[]);
  }
}
