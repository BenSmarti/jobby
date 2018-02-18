import { Component, OnInit } from '@angular/core';

import { JobService } from '../../shared/_services/http/job.service';
import { MiscService } from '../../shared/_services/http/misc.service';

import { Job } from '../../shared/_models/job.model';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [JobService, MiscService]
})
export class HomeComponent implements OnInit {

  categories = [];

  activeHighlightCategory = 'hot';

  availableOnApps = ['Google Play', 'App Store', 'Windows Store'];

  jobs: Job[] = [];
  counters: number[] = [];

  constructor(private jobService: JobService, private miscService: MiscService) {}

  ngOnInit() {
    this.jobService.getJobs().then(response => this.jobs = response);
    this.jobService.getCategories().then(response => this.categories = response);
    this.miscService.getCounters().then(response => this.counters = response);

    this.abc().next((a) => console.log(a));
  }

  abc() {
    return Observable.create((observer) => {
      setTimeout(() => observer.next(1), 2000);
      setTimeout(() => observer.next(2), 3000);
      setTimeout(() => observer.next(3), 4000);
      setTimeout(() => observer.next(4), 5000);
    }).subscribe((message) => message);
  }
}
