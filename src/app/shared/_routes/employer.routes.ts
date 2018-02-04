import {Routes} from '@angular/router';
import {LoginComponent} from '../../public/login/login.component';
import {RegisterComponent} from '../../public/register/register.component';

<<<<<<< HEAD
export const EMPLOYER_ROUTES: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
=======
import { JobComponent } from '../../employer/job/job.component';
import { CandidatesComponent } from '../../employer/candidates/candidates.component';

export const EMPLOYER_ROUTES: Routes = [
  { path: 'jobs', component: JobComponent },
  { path: 'candidates', component: CandidatesComponent },
>>>>>>> 62dd37b01d70a0623152afb25700c0ce9199fbb1
];
