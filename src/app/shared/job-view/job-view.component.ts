import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TranslationsComponent } from '../translations/translations.component';

import { LocaleService } from '../_services/locale.service';
import { JobService } from '../_services/http/job.service';

import { Job } from '../_models/job.model';

@Component({
  selector: 'app-job-view',
  templateUrl: './job-view.component.html',
  styleUrls: ['./job-view.component.css']
})
export class JobViewComponent extends TranslationsComponent implements OnInit {

  job = new Job;

  constructor(private route: ActivatedRoute, localeService: LocaleService, private jobService: JobService) {
    super(localeService);
  }

  ngOnInit() {
    this.jobService.getJob(+this.route.snapshot.params['id']).then(response => this.job = response);
  }

}
