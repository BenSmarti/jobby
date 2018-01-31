export abstract class TranslationsComponent {
  constructor(private translations = JSON.parse(localStorage.getItem('translations'))) {}

  protected t(key: string): string {
    if (!this.translations[key]) {
      return '';
    }

    return this.translations[key];
  }
}
