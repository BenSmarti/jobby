import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataTableComponent } from '../../../shared/data-table/data-table.component';

import { EmployerService } from '../../../shared/_services/http/employer.service';
import { LocaleService } from '../../../shared/_services/locale.service';

@Component({
  selector: 'app-employers',
  templateUrl: './employers.component.html',
  styleUrls: ['../../../shared/data-table/data-table.component.css'],
})
export class EmployersComponent extends DataTableComponent {

  readonly headers = [
    { column: 'employerName', label: 'EMPLOYER_NAME' }, { column: 'activeJobs', label: 'ACTIVE_JOBS' }
  ];

  constructor(route: ActivatedRoute, localeService: LocaleService, private employerService: EmployerService) {
    super(route, localeService);
  }

  fetchItems(): void {
    this.employerService.getEmployers().then(response => this.setItems(response));
  }
}
