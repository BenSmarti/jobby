import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TranslationsComponent } from '../../../shared/translations/translations.component';

import { LocaleService } from '../../../shared/_services/locale.service';
import { JobService } from '../../../shared/_services/http/job.service';

import { Select2OptionData } from 'ng2-select2';
import { Job } from '../../../shared/_models/job.model';

declare let Select2Options: any;

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.css']
})
export class JobFormComponent extends TranslationsComponent implements OnInit {

  job = new Job();
  categories: Select2OptionData[] = [];

  isFailed = false;

  readonly salaryMethods = [
    { id: 'monthly', text: this.t('MONTHLY')},
    { id: 'hourly', text: this.t('HOURLY')}
  ];

  readonly jobTypes = [
    { id: 'full_time', text: this.t('FULL_TIME')},
    { id: 'part_time', text: this.t('PART_TIME')},
    { id: 'freelance', text: this.t('FREELANCE')}
  ];

  constructor(private router: Router, private route: ActivatedRoute, protected localeService: LocaleService,
              private jobService: JobService) {
    super(localeService);
  }

  ngOnInit() {
    this.jobService.getCategories().then(response => this.setCategories(response));
    // this.localeService.langChanged.subscribe()
  }

  private setCategories(categories: Select2OptionData[]): void {
    for (let i = 0; i < categories.length; i++) {
      categories[i].text = this.t(categories[i].text.toUpperCase());
      this.categories.push(categories[i]);
    }
  }

  getSelectOptions(placeholder: string, literal?: boolean, disableSearch?: boolean): Select2Options {
    const options = <Select2Options>{
      dir: this.localeService.getDir(),
      lang: this.localeService.lang,
      placeholder: literal ? placeholder : this.t(('select_' + placeholder).toUpperCase())
    };

    if (disableSearch) {
      options.minimumResultsForSearch = -1;
    }

    return options;
  }

  submit(isValid: boolean): void {
    if (isValid) {
      this.jobService.newJob(this.job).then(response => {
        if (response) {
          sessionStorage.setItem('saved-item', this.job.title);
          this.router.navigate(['..'], { relativeTo: this.route });
        } else {
          this.isFailed = true;
        }
      });
    }
  }
}
