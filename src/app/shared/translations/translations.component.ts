import { LocaleService } from '../_services/locale.service';

import { Translation } from '../_models/translation.model';

export abstract class TranslationsComponent {
  private translations: Translation[] = [];

  constructor(private localeService: LocaleService) {
    this.translations = this.localeService.getTranslations();
    this.localeService.langChanged.subscribe(() => this.translations = this.localeService.getTranslations());
  }

  protected t(key: string): string {
    if (!this.translations[key]) {
      return '';
    }

    return this.translations[key];
  }
}
