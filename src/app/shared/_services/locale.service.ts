import { Injectable } from '@angular/core';
import { Translation } from '../_models/translation.model';

import { Subject } from 'rxjs/Subject';

@Injectable()
export class LocaleService {

  lang: string;
  langChanged: Subject<boolean> = new Subject;

  initLang(): string {
    if (localStorage.getItem('lang')) {
      this.lang = localStorage.getItem('lang');
    } else {
      this.lang = navigator.language.substr(0, 2);
      localStorage.setItem('lang', this.lang);
    }

    return this.lang;
  }

  setLang(lang: string): void {
    this.lang = lang;
    localStorage.removeItem('lang');
    localStorage.setItem('lang', this.lang);
  }

  getTranslations(): any {
    if (localStorage.getItem('translations')) {
      return JSON.parse(localStorage.getItem('translations'));
    }

    return false;
  }

  setTranslations(translations: Translation[]): any {
    localStorage.setItem('translations', JSON.stringify(translations));
    this.langChanged.next(true);
  }

  getDir(): 'rtl' | 'ltr' {
    return (this.lang === 'he') ? 'rtl' : 'ltr';
  }
}
