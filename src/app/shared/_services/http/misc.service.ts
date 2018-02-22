import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from './base-http.service';

import { Country } from '../../_models/country.model';

@Injectable()
export class MiscService extends BaseHttpService {
  readonly endPoint = this.apiUrl + '/misc';

  constructor(private http: HttpClient) {
    super();
  }

  getCounters(): Promise<number[]> {
    return this.http.get(this.endPoint + '/counter')
    .toPromise()
    .then(response => response as number[]);
  }

  getCountries(): Promise<Country[]> {
    return this.http.get(this.endPoint + '/country')
    .toPromise()
    .then(response => response as Country[]);
  }
}
