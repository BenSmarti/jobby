import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TranslationsComponent } from '../../shared/translations/translations.component';

import { LocaleService } from '../../shared/_services/locale.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent extends TranslationsComponent implements OnInit {

  activeTab: string;

  constructor(localeService: LocaleService, private route: ActivatedRoute) {
    super(localeService);
  }

  ngOnInit() {
    this.activeTab = this.route.snapshot.firstChild.routeConfig.path;
  }

}
