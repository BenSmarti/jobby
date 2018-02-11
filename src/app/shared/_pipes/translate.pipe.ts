import { Pipe, PipeTransform } from '@angular/core';

import { LocaleService } from '../_services/locale.service';

import { Translation } from '../_models/translation.model';

@Pipe({
  name: 't',
  pure: false
})
export class TranslatePipe implements PipeTransform {

  private translations: Translation[] = [];

  constructor(protected localeService: LocaleService) {
    this.translations = this.localeService.getTranslations();
    this.localeService.langChanged.subscribe(() => this.translations = this.localeService.getTranslations());
  }

  transform(key: string) {
    if (!this.translations[key]) {
      return '';
    }

    return this.translations[key];
  }
}
