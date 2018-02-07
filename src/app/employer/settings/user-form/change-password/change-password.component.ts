import { Component } from '@angular/core';

import { TranslationsComponent } from '../../../../shared/translations/translations.component';

import { LocaleService } from '../../../../shared/_services/locale.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent extends TranslationsComponent {

  constructor(localeService: LocaleService) {
    super(localeService);
  }
}
