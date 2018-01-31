import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Breadcrumb } from '../_generic/breadcrumbs';

@Injectable()
export class BreadcrumbService {

  breadcrumbSubject: Subject<Breadcrumb[]> = new Subject;

  setBreadcrumb(breadcrumbLinks: Breadcrumb[], homeUrl?: string): void {
    const breadcrumb = [{ label: 'בית', url: homeUrl ? homeUrl : '' }];
    this.breadcrumbSubject.next(breadcrumb.concat(breadcrumbLinks));
  }
}
