import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TranslationService } from './shared/_services/http/translation.service';

import { Translation } from './shared/_models/translation.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

  lang: string;
  translations: Translation[];

  constructor(private route: ActivatedRoute, private renderer: Renderer2, private translationsService: TranslationService) {}

  ngOnInit() {
    if (localStorage.getItem('lang')) {
      this.lang = localStorage.getItem('lang');
    } else {
      this.lang = navigator.language.substr(0, 2);
      localStorage.setItem('lang', this.lang);
    }

    const direction = this.lang === 'he' ? 'rtl' : 'ltr';
    this.renderer.addClass(document.body, direction);

    this.translations = this.route.snapshot.data['translations'];

    if (!localStorage.getItem('translations')) {
      localStorage.setItem('translations', JSON.stringify(this.translations));
    }
  }

  changeLocale(): void {
    this.setBodyClass();

    this.translationsService.getTranslations(this.lang).then(response => {
      this.translations = response;
      localStorage.setItem('translations', JSON.stringify(this.translations));
    });
  }

  private setBodyClass(): void {
    if (this.lang === 'he' && localStorage.getItem('lang') !== 'he') {
      this.renderer.addClass(document.body, 'rtl');
      this.renderer.removeClass(document.body, 'ltr');
    }

    if (this.lang !== 'he' && localStorage.getItem('lang') === 'he') {
      this.renderer.addClass(document.body, 'ltr');
      this.renderer.removeClass(document.body, 'rtl');
    }

    localStorage.setItem('lang', this.lang);
  }

  private t(key: string): string {
    if (!this.translations[key]) {
      return '';
    }

    return this.translations[key];
  }
}
