import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from './base-http.service';

import { Employer } from '../../_models/employer.model';

@Injectable()
export class AppHttpService extends BaseHttpService {

  constructor(private http: HttpClient) {
    super();
  }

  login(username: string, password: string): Promise<string> {
    return this.http.post(this.apiUrl + '/Account/GenerateTokenEmployer', { UserName: username, Password: password })
      .toPromise()
      .then(response => response as string)
      .catch(response => response.ok);
  }

  register(employer: Employer): Promise<string> {
    return this.http.post(this.apiUrl + '/Account/GenerateTokenEmployer', { UserName: employer.username, Password: employer.password })
      .toPromise()
      .then(response => response as string)
      .catch(response => response.ok);
  }
}
