import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {  BaseHttpService } from './base-http.service';
import { UserSessionService } from '../user-session.service';

import { Candidate } from '../../_models/candidate.model';

@Injectable()
export class CandidateService extends BaseHttpService {

  readonly endPoint = this.apiUrl + '/candidate';

  constructor(private http: HttpClient, userSession: UserSessionService) {
    super(userSession);
  }

  getCandidates(jobID: number, type: string): Promise<Candidate[]> {
    const options = { headers: this.getTokenHeaders() };
    options['params'] = { type: 'all', jobID: jobID };

    return this.http.get(this.endPoint, options)
    .toPromise()
    .then(response => response as Candidate[]);
  }

}
