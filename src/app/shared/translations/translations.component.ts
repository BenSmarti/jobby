export abstract class TranslationsComponent {
  constructor(protected translations = JSON.parse(localStorage.getItem('translations'))) {}
}
