import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { TranslationService } from '../_services/http/translation.service';
import { LocaleService } from '../_services/locale.service';

import { Translation } from '../_models/translation.model';

@Injectable()
export class TranslationsResolve implements Resolve<Translation[]> {

  constructor(private translationsService: TranslationService, private localeService: LocaleService) {}

  resolve(route: ActivatedRouteSnapshot) {
    const translations = this.localeService.getTranslations();

    if (translations) {
      return translations;
    }

    return this.translationsService.getTranslations('en');
  }
}
