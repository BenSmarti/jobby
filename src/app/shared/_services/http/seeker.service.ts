import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from './base-http.service';
import { UserSessionService } from '../user-session.service';

import { Seeker } from '../../_models/seeker.model';

@Injectable()
export class SeekerService extends BaseHttpService {

  readonly endPoint = this.apiUrl + '/seeker';

  constructor(userSession: UserSessionService, private http: HttpClient) {
    super(userSession);
  }

  getSeeker(): Promise<Seeker> {
    return this.http.get(this.endPoint, this.getTokenRequest())
    .toPromise()
    .then(response => response as Seeker)
    .catch(() => null);
  }

}
