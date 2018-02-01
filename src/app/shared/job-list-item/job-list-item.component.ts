import { Component, Input } from '@angular/core';

import { TranslationsComponent } from '../translations/translations.component';

import { LocaleService } from '../_services/locale.service';

import { Job } from '../_models/job.model';

@Component({
  selector: 'app-job-list-item',
  templateUrl: './job-list-item.component.html',
  styleUrls: ['./job-list-item.component.css']
})
export class JobListItemComponent extends TranslationsComponent {
  @Input() job: Job;

  constructor(localeService: LocaleService) {
    super(localeService);
  }

  getTypeClass(): string {
    let type = this.job.type.toLowerCase();
    type = type.replace('_', '-');
    return type;
  }
}
