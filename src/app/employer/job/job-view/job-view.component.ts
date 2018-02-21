import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { JobService } from '../../../shared/_services/http/job.service';

import { Job } from '../../../shared/_models/job.model';

@Component({
  selector: 'app-job-view',
  templateUrl: './job-view.component.html',
  styleUrls: ['./job-view.component.css']
})
export class JobViewComponent implements OnInit {

  job = new Job;

  constructor(private route: ActivatedRoute, private jobService: JobService) {}

  ngOnInit() {
    this.jobService.getJob(+this.route.snapshot.params['id']).then(response => this.job = response);
  }

}
