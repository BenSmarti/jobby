import { Routes } from '@angular/router';

import { HomeComponent } from '../../seeker/home/home.component';
import { JobSearchComponent } from '../../public/job-search/job-search.component';
import { JobDetailsComponent } from '../../public/job-search/job-details/job-details.component';
import { MyJobbyComponent } from '../../seeker/my-jobby/my-jobby.component';
import { InterviewComponent } from '../../seeker/interview/interview.component';

import { JobResolve}  from '../_resolves/job.resolve';
import {PreferencesComponent} from '../../seeker/preferences/preferences.component';
import {SettingsComponent} from '../../seeker/settings/settings.component';

export const SEEKER_ROUTES: Routes = [
  { path: '', component: HomeComponent, data: { title: 'home'} },
  { path: 'job/:id', component: JobDetailsComponent, data: { title: 'Job_Details'}, resolve: { job: JobResolve } },
  { path: 'myJobby', component: MyJobbyComponent, data: { title: 'My Jobby', translate: false } },
  { path: 'interviews', component: InterviewComponent, data: { title: 'interviews'} },
  { path: 'preferences', component: PreferencesComponent, data: { title: 'preferences'}},
  { path: 'settings', component: SettingsComponent, data: { title: 'settings'}}
];
