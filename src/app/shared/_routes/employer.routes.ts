import { Routes } from '@angular/router';

import { JobComponent } from '../../employer/job/job.component';
import { JobFormComponent } from '../../employer/job/job-form/job-form.component';
import { CandidatesComponent } from '../../employer/candidates/candidates.component';
import { SettingsComponent } from '../../employer/settings/settings.component';
import { EmployersComponent } from '../../employer/settings/employers/employers.component';
import { EmployerFormComponent } from '../../employer/settings/employers/employer-form/employer-form.component';
import { UsersComponent } from '../../employer/settings/users/users.component';
import { UserFormComponent } from '../../employer/settings/users/user-form/user-form.component';

import { EmployerActiveJobsResolve } from '../_resolves/employer-jobs.resolve';

export const EMPLOYER_ROUTES: Routes = [
  { path: 'jobs', component: JobComponent, data: { title: 'jobs' } },
  { path: 'jobs/form', component: JobFormComponent, data: { title: 'jobs' } },
  { path: 'candidates', component: CandidatesComponent, data: { title: 'candidates' },
    resolve: { activeJobs: EmployerActiveJobsResolve }},
  { path: 'profile', component: UserFormComponent, data: { title: 'my_profile' }},
  { path: 'settings', component: SettingsComponent, children: [
      { path: '', redirectTo: 'employers', pathMatch: 'full' },
      { path: 'employers', component: EmployersComponent, data: { title: 'employers' }},
      { path: 'users', component: UsersComponent, data: { title: 'users' }},
  ]},
  { path: 'settings/employers/form', component: EmployerFormComponent, data: { title: 'settings' }},
  { path: 'settings/employers/form/:id', component: EmployerFormComponent, data: { title: 'settings' }},
  { path: 'settings/users/form', component: UserFormComponent, data: { title: 'settings' }},
  { path: 'settings/users/form/:id', component: UserFormComponent, data: { title: 'settings' }},
];
