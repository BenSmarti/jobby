import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '../../shared/_pipes/translate.module';
import { JobListItemModule } from '../shared/job-list-item/job-list-item-module';

import { JobComponent } from './job.component';
import { JobDetailsComponent } from './job-details/job-details.component';

import { JobService } from '../../shared/_services/http/job.service';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    JobListItemModule
  ],
  declarations: [JobComponent, JobDetailsComponent],
  providers: [JobService]
})
export class JobModule {}
