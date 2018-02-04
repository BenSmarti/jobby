import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataTableComponent } from '../../shared/data-table/data-table.component';

import { LocaleService } from '../../shared/_services/locale.service';
import { EmployerService } from '../../shared/_services/http/employer.service';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['../../shared/data-table/data-table.component.css']
})
export class CandidatesComponent extends DataTableComponent implements OnInit {

  constructor(route: ActivatedRoute, localeService: LocaleService, private employerService: EmployerService) {
    super(route, localeService);
  }

  fetchItems(): void {

  }
}
