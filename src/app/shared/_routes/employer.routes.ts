import { Routes } from '@angular/router';

import { JobComponent } from '../../employer/job/job.component';
import { JobFormComponent } from '../../employer/job/job-form/job-form.component';
import { CandidatesComponent } from '../../employer/candidates/candidates.component';

import { EmployerActiveJobsResolve } from '../_resolves/employer-jobs.resolve';

export const EMPLOYER_ROUTES: Routes = [
  { path: 'jobs', component: JobComponent, data: { title: 'jobs' } },
  { path: 'jobs/post', component: JobFormComponent, data: { title: 'jobs' } },
  { path: 'candidates', component: CandidatesComponent, data: { title: 'candidates' }, resolve: { activeJobs: EmployerActiveJobsResolve }}
];
