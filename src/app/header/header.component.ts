import {Component, Input, Output, EventEmitter } from '@angular/core';

import { TranslationsComponent } from '../shared/translations/translations.component';

import { LocaleService } from '../shared/_services/locale.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends TranslationsComponent {
  @Input() lang;
  @Output() langChanged = new EventEmitter();

  constructor (localeService: LocaleService) {
    super(localeService);
  }

  changeLang(): void {
    this.langChanged.emit(this.lang);
  }
}
