import { Component, Input } from '@angular/core';

import { Job } from '../../../shared/_models/job.model';

@Component({
  selector: 'app-job-list-item',
  templateUrl: './job-list-item.component.html',
  styles: [`.job { position: relative; padding: 0 15px;} .employer-logo { width: 100px; height: auto; } `]
})
export class JobListItemComponent {
  @Input() job: Job;
}
