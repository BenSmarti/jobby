import { Component, OnInit } from '@angular/core';

import { BreadcrumbService } from '../../shared/_services/breadcrumbs.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  chartData = [15, 10, 23];
  chartLabels = ['מועמדים שאהבתי', 'מועמדים שאהבו אותי', 'התאמות'];
  chartColors = [
    {
      backgroundColor: ['#4a7eae', '#5a9bd4', '#acc5e4']
    }
  ];

  constructor(private breadcrumbs: BreadcrumbService) {}

  ngOnInit() {
    this.breadcrumbs.setBreadcrumb([{ url: 'dashboard', label: 'לוח בקרה' }]);
  }

}
