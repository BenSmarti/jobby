import { Routes } from '@angular/router';

import { JobComponent } from '../../seeker/job/job.component';
import { MyJobbyComponent } from '../../seeker/my-jobby/my-jobby.component';
import { JobDetailsComponent } from '../../seeker/job/job-details/job-details.component';
import { InterviewComponent } from '../../seeker/interview/interview.component';

import { JobResolve}  from '../_resolves/job.resolve';

export const SEEKER_ROUTES: Routes = [
  { path: '', component: JobComponent, data: { title: 'Jobs'} },
  { path: 'myJobby', component: MyJobbyComponent, data: { title: 'My Jobby', translate: false }},
  { path: 'job/:id', component: JobDetailsComponent, data: { title: 'Job_Details'}, resolve: { job: JobResolve } },
  { path: 'interviews', component: InterviewComponent, data: { title: 'interviews'}}
];
