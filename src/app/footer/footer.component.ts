import { Component } from '@angular/core';

import { TranslationsComponent } from '../shared/translations/translations.component';

import { LocaleService } from '../shared/_services/locale.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent extends TranslationsComponent {
  constructor(localeService: LocaleService) {
    super(localeService);
  }
}
