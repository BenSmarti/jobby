import {Routes} from '@angular/router';

import { HomeComponent } from '../../public/home/home.component';
import { LoginComponent } from '../../public/login/login.component';
import { RegisterComponent } from '../../public/register/register.component';
import { JobViewComponent } from '../job-view/job-view.component';
import { SeekerViewComponent } from '../seeker-view/seeker-view.component';

// TODO: set another route - secure route for both seeker and employer

export const PUBLIC_ROUTES: Routes = [
    { path: '', component: HomeComponent, data: { title: 'home'} },
    { path: 'login', component: LoginComponent, data: { title: 'login' } },
    { path: 'register', component: RegisterComponent },
    { path: 'jobs/:id', component: JobViewComponent },
    { path: 'candidates/:id', component: SeekerViewComponent }
  ]
;
