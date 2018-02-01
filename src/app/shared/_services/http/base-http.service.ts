import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

import { UserSessionService } from '../user-session.service';

@Injectable()
export class BaseHttpService {

  readonly apiUrl = environment.apiUrl;

  constructor(protected userSession?: UserSessionService) {}

  getTokenHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', this.userSession.getToken());
    return headers;
  }

  getTokenHeadersWithFormData(token: string): HttpHeaders {
    return new HttpHeaders({ 'Authorization': token });
  }
}
