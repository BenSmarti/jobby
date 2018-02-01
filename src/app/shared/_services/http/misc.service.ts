import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from './base-http.service';

@Injectable()
export class MiscService extends BaseHttpService {
  readonly endPoint = this.apiUrl + '/misc';

  constructor(private http: HttpClient) {
    super();
  }

  getCounters(): Promise<number[]> {
    return this.http.get(this.endPoint + '/counters').toPromise()
      .then(response => response as number[]);
  }
}
