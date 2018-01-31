import { Component, OnInit } from '@angular/core';

import { TranslationsComponent } from '../../shared/translations/translations.component';

import { LocaleService } from '../../shared/_services/locale.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends TranslationsComponent implements OnInit {

  constructor(localeService: LocaleService) {
    super(localeService);
  }

  ngOnInit() {
  }

}
