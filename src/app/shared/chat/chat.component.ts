import { Component, OnInit } from '@angular/core';

import { TranslationsComponent } from '../translations/translations.component';

import { LocaleService } from '../_services/locale.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [LocaleService]
})
export class ChatComponent extends TranslationsComponent implements OnInit {

  constructor(localeService: LocaleService) {
    super(localeService);
  }

  ngOnInit() {
  }

}
