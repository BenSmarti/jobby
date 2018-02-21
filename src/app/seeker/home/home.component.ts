import { Component, OnInit } from '@angular/core';

import { JobService } from '../../shared/_services/http/job.service';

import { Job } from '../../shared/_models/job.model';

@Component({
  selector: 'app-seeker-home',
  templateUrl: './home.component.html',
  providers: [JobService]
})
export class HomeComponent implements OnInit {

  recommendedJobs: Job[];

  constructor(private jobService: JobService) {}

  ngOnInit() {
    this.jobService.getRecommendedJobs().then(response => this.recommendedJobs = response);
  }

}
