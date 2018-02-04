import {Routes} from '@angular/router';
import {LoginComponent} from '../../public/login/login.component';
import {RegisterComponent} from '../../public/register/register.component';
import {JobComponent} from '../../employer/job/job.component';
import {CandidatesComponent} from '../../employer/candidates/candidates.component';

export const EMPLOYER_ROUTES: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'jobs', component: JobComponent},
  {path: 'candidates', component: CandidatesComponent},
];
