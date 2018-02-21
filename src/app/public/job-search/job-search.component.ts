import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Subscription } from 'rxjs/Subscription';

import { JobService } from '../../shared/_services/http/job.service';

import { Job } from '../../shared/_models/job.model';
import { JobSearchCriteria } from '../../shared/_generic/job-search-criteria';

@Component({
  selector: 'app-job-search',
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.css'],
  animations: [
    trigger('fade', [
      state('hidden', style({
        opacity: '0',
        display: 'none'
      })),
      state('shown', style({
        opacity: '1',
        display: '*'
      })),
      transition('hidden => shown', animate('250ms ease-in')),
      transition('shown => hidden', animate('250ms ease-out'))
    ]),
  ]
})
export class JobSearchComponent implements OnInit, OnDestroy {

  routeSubscription: Subscription;

  mobileFiltersState = 'hidden';

  jobs: Job[] = [];

  params = new JobSearchCriteria();

  constructor(private route: ActivatedRoute, private jobService: JobService) {}

  ngOnInit() {
    this.routeSubscription = this.route.queryParams.subscribe(params => {

      if (params.q) {
        this.params.q = params.q;
      }

      if (params.location) {
        this.params.location = params.location;
      }

      this.getJobs();
    });
  }

  getJobs(): void {
    this.jobService.getJobs(this.params).then(response => this.jobs = response);
  }

  setMobileFiltersState(): void {
    this.mobileFiltersState = (this.mobileFiltersState === 'hidden') ? 'shown' : 'hidden';
  }

  ngOnDestroy() {
    this.routeSubscription.unsubscribe();
  }
}
