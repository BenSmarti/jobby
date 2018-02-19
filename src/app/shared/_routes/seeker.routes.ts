import { Routes } from '@angular/router';

import { JobComponent } from '../../seeker/job/job.component';

export const SEEKER_ROUTES: Routes = [
  { path: '', component: JobComponent, data: { title: 'home'} }
];
