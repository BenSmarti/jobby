import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataTableComponent } from '../../shared/data-table/data-table.component';

import { LocaleService } from '../../shared/_services/locale.service';
import { JobService } from '../../shared/_services/http/job.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['../../shared/data-table/data-table.component.css', './job.component.css']
})
export class JobComponent extends DataTableComponent implements OnInit {

  activeTab;

  readonly tabs = [
      { label: 'ACTIVE_TASKS', criterion: 'active' }, { label: 'FROZEN_TASKS', criterion: 'inactive' },
      { label: 'DRAFTS', criterion: 'drafts' }, { label: 'DELETED_TASKS', criterion: 'deleted'}
    ];

  readonly headers = [
    { column: null, label: 'JOB_NAME' }, { column: null, label: 'CANDIDATES' }
  ];

  constructor(route: ActivatedRoute, localeService: LocaleService, private jobService: JobService) {
    super(route, localeService);
  }

  ngOnInit() {
    this.activeTab = this.tabs[0];
    super.ngOnInit();
  }

  setTab(tab): void {
    this.activeTab = tab;
    this.fetchItems();
  }

  fetchItems(): void {
    this.jobService.getEmployerJobs(this.activeTab.criterion).then(response =>this.setItems(response));
  }
}
