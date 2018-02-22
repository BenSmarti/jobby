import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataTableComponent } from '../../shared/data-table/data-table.component';

import { JobService } from '../../shared/_services/http/job.service';

@Component({
  selector: 'app-my-jobby',
  templateUrl: './my-jobby.component.html',
  styleUrls: ['./my-jobby.component.css', '../../shared/data-table/data-table.component.css'],
})
export class MyJobbyComponent extends DataTableComponent implements OnInit {

  readonly tabs = [
    { label: 'LIKED', criterion: 'candidateLike' }, { label: 'LIKED_ME', criterion: 'employerLike' },
    { label: 'MATCHES', criterion: 'matches' },
  ];

  readonly headers = [
    { column: 'employer', label: 'COMPANY' }, { column: 'role', label: 'JOB_POSITION' },
    { column: 'date', label: 'DATE' } , { column: 'email', label: 'COMPANY_EMAIL' },
    { column: 'phone', label: 'COMPANY_PHONE' }
  ];

  constructor(route: ActivatedRoute, private jobService: JobService) {
    super(route);
  }

  ngOnInit() {
    this.activeTab = this.tabs[0];
    super.ngOnInit();
  }

  fetchItems(): void {
    this.jobService.getJobs().then(response => this.setItems(response));
  }
}
