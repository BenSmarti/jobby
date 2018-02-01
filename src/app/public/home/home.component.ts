import { Component, OnInit } from '@angular/core';

import { TranslationsComponent } from '../../shared/translations/translations.component';

import { LocaleService } from '../../shared/_services/locale.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends TranslationsComponent implements OnInit {

  categories = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  activeHighlightCategory = 'hot';

  constructor(localeService: LocaleService) {
    super(localeService);
  }

  ngOnInit() {
  }

}
