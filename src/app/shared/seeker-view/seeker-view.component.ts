import { Component, OnInit } from '@angular/core';

import { TranslationsComponent } from '../translations/translations.component';

import { LocaleService } from '../_services/locale.service';

@Component({
  selector: 'app-seeker-view',
  templateUrl: './seeker-view.component.html',
  styleUrls: ['./seeker-view.component.css']
})
export class SeekerViewComponent extends TranslationsComponent implements OnInit {

  constructor(localeService: LocaleService) {
    super(localeService);
  }

  ngOnInit() {
  }

}
