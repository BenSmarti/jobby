import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from './base-http.service';
import { UserSessionService } from '../user-session.service';

import { Interview } from '../../_models/interview.model';

@Injectable()
export class InterviewService extends BaseHttpService {

  readonly endPoint = this.apiUrl + '/interview';

  constructor(userSession: UserSessionService, private http: HttpClient) {
    super(userSession);
  }

  setInterview() {}

  getInterviews(q?: string): Promise<Interview[]> {
    const options = {
      headers: this.getTokenHeaders(),
    };

    if (q) {
      options['params'] = { q: q };
    }

    return this.http.get(this.endPoint, options)
    .toPromise()
    .then(response => response as Interview[])
    .catch(() => null)
  }
}
