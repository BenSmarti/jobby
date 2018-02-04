import { Routes } from '@angular/router';

import { JobComponent } from '../../employer/job/job.component';
import { CandidatesComponent } from '../../employer/candidates/candidates.component';

export const EMPLOYER_ROUTES: Routes = [
  { path: 'jobs', component: JobComponent, data: { title: 'jobs' } },
  { path: 'candidates', component: CandidatesComponent, data: { title: 'candidates' } }
];
