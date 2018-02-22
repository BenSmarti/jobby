import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from './base-http.service';

import { Translation } from '../../_models/translation.model';

@Injectable()
export class TranslationService extends BaseHttpService {

  readonly endPoint = this.apiUrl + '/translations';

  constructor(private http: HttpClient) {
    super();
  }

  getTranslations(lang: string): Promise<Translation[]> {
    return this.http.get(this.endPoint + '/getTranslations', { params: { lang: lang }}).toPromise()
    .then(repsonse => repsonse as Translation[]);
  }

}
