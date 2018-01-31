import { Component, OnInit } from '@angular/core';

import { BreadcrumbService } from '../shared/_services/breadcrumbs.service';

import { Breadcrumb } from '../shared/_generic/breadcrumbs';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css']
})
export class EmployerComponent implements OnInit {

  readonly menuLinks = [
    { label: 'לוח הבקרה', url: 'dashboard' }, { label: 'משרות', url: 'positions' },
    { label: 'ראיונות', url: 'interviews' }, { label: 'הודעות', url: 'messages' },
    { label: 'פרופיל', url: 'profile' }
  ];

  lang: string;
  breadcrumbs: Breadcrumb[];

  constructor(private breadcrumbsService: BreadcrumbService) {}

  ngOnInit() {
    this.breadcrumbsService.breadcrumbSubject.subscribe(message => this.breadcrumbs = message);
  }
}
