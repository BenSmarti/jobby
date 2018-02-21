import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '../../shared/_pipes/translate.module';
import { JobListItemModule } from '../../seeker/shared/job-list-item/job-list-item-module';

import { JobSearchComponent } from './job-search.component';
import { JobDetailsComponent } from './job-details/job-details.component';

import { JobService } from '../../shared/_services/http/job.service';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    JobListItemModule
  ],
  declarations: [JobSearchComponent, JobDetailsComponent],
  providers: [JobService]
})
export class JobSearchModule {}
