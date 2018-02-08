import { Component, OnInit } from '@angular/core';

import { TranslationsComponent } from '../../../../shared/translations/translations.component';

import { LocaleService } from '../../../../shared/_services/locale.service';

import { Employer } from '../../../../shared/_models/employer.model';

@Component({
  selector: 'app-employer-form',
  templateUrl: './employer-form.component.html'
})
export class EmployerFormComponent extends TranslationsComponent implements OnInit {

  employer = new Employer;

  logoPreview;

  constructor(localeService: LocaleService) {
    super(localeService);
  }

  ngOnInit() {
  }

  uploadLogo(file: File): void {
    const reader = new FileReader();
    reader.onload = ((event: ProgressEvent) => this.logoPreview = event.target['result']);

    reader.readAsDataURL(file);
  }

  resetLogo(logoInput): void {
    logoInput.value = '';
    this.logoPreview = null;
  }
}
