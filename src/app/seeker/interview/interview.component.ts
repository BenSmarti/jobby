import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataTableComponent } from '../../shared/data-table/data-table.component';

import { HelpersService } from '../../shared/_services/helpers.service';
import { InterviewService } from '../../shared/_services/http/interview.service';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['../../shared/data-table/data-table.component.css'],
  providers: [HelpersService, InterviewService]
})
export class InterviewComponent extends DataTableComponent {

  readonly headers = [
    { column: 'employer', label: 'COMPANY' }, { column: 'role', label: 'JOB_POSITION' },
    { column: 'date', label: 'DATE' } , { column: 'email', label: 'COMPANY_EMAIL' },
    { column: 'phone', label: 'COMPANY_PHONE' }
  ];

  constructor(route: ActivatedRoute, public helpers: HelpersService, private interviewService: InterviewService) {
    super(route);
  }

  fetchItems(): void {
    this.interviewService.getInterviews(this.searchCriteria['q']).then(response => this.setItems(response));
  }
}
