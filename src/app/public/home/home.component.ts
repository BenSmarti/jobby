import { Component, OnInit } from '@angular/core';

import { TranslationsComponent } from '../../shared/translations/translations.component';

import { JobService } from '../../shared/_services/http/job.service';
import { MiscService } from '../../shared/_services/http/misc.service';

import { Job } from '../../shared/_models/job.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [JobService, MiscService]
})
export class HomeComponent implements OnInit {

  categories = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  activeHighlightCategory = 'hot';

  availableOnApps = ['Google Play', 'App Store', 'Windows Store'];

  jobs: Job[] = [];
  counters: number[] = [];

  constructor(private jobService: JobService, private miscService: MiscService) {}

  ngOnInit() {
    this.jobService.getJobs().then(response => this.jobs = response);
    this.miscService.getCounters().then(response => this.counters = response);
  }

}
