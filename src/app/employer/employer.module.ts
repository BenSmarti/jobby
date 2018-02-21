import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { JobModule } from './job/job.module';
import { CandidatesModule } from './candidates/candidates.module';
import { SettingsModule } from './settings/settings.module';
import { JobViewModule } from './job/job-view/job-view.module';
import { SeekerViewModule } from './candidates/seeker-view/seeker-view.module';

import { EmployerActiveJobsResolve } from '../shared/_resolves/employer-jobs.resolve';

@NgModule({
  imports: [
    BrowserModule,
    JobModule,
    CandidatesModule,
    SettingsModule,
    JobViewModule,
    SeekerViewModule
  ],
  providers: [EmployerActiveJobsResolve]
})
export class EmployerModule {}
