import { Routes } from '@angular/router';

import { JobComponent } from '../../employer/job/job.component';
import { JobFormComponent } from '../../employer/job/job-form/job-form.component';
import { CandidatesComponent } from '../../employer/candidates/candidates.component';
import { UserFormComponent } from '../../employer/settings/user-form/user-form.component';
import { SettingsComponent } from '../../employer/settings/settings.component';

import { EmployerActiveJobsResolve } from '../_resolves/employer-jobs.resolve';

export const EMPLOYER_ROUTES: Routes = [
  { path: 'jobs', component: JobComponent, data: { title: 'jobs' } },
  { path: 'jobs/post', component: JobFormComponent, data: { title: 'jobs' } },
  { path: 'candidates', component: CandidatesComponent, data: { title: 'candidates' },
    resolve: { activeJobs: EmployerActiveJobsResolve }},
  { path: 'settings', component: SettingsComponent, data: { title: 'settings' }},
  { path: 'profile', component: UserFormComponent, data: { title: 'my_profile' }},
  { path: 'employer/form', component: UserFormComponent, data: { title: 'employer' }},
  { path: 'employer/form/:id', component: UserFormComponent, data: { title: 'update_employer' }},
  { path: 'user/form', component: UserFormComponent, data: { title: 'new_user' }},
  { path: 'user/form/:id', component: UserFormComponent, data: { title: 'update_user' }},
];
