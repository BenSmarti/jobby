import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HelpersService } from '../../../shared/_services/helpers.service';

import { Job } from '../../../shared/_models/job.model';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css'],
  providers: [HelpersService]
})
export class JobDetailsComponent implements OnInit {

  job: Job;

  constructor(private route: ActivatedRoute, public helpers: HelpersService) {}

  ngOnInit() {
    this.job = this.route.snapshot.data['job'];
  }
}
