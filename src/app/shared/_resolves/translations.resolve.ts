import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { TranslationService } from '../_services/http/translation.service';

import { Translation } from '../_models/translation.model';

@Injectable()
export class TranslationsResolve implements Resolve<Translation[]> {

  constructor(private translationsService: TranslationService) {}

  resolve(route: ActivatedRouteSnapshot) {
    if (localStorage.getItem('translations')){
      return JSON.parse(localStorage.getItem('translations'));
    }

    return this.translationsService.getTranslations('en');
  }
}
