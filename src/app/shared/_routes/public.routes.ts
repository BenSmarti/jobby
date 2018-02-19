import { Routes } from '@angular/router';

import { HomeComponent } from '../../public/home/home.component';
import { LoginComponent } from '../../public/authentication/login/login.component';
import { RegisterComponent } from '../../public/authentication/register/register.component';
import { JobViewComponent } from '../job-view/job-view.component';
import { SeekerViewComponent } from '../seeker-view/seeker-view.component';
import { ChatComponent } from '../chat/chat.component';

// TODO: set another route - secure route for both seeker and employer

export const PUBLIC_ROUTES: Routes = [
    { path: '', component: HomeComponent, data: { title: 'home'} },
    { path: 'login', component: LoginComponent, data: { title: 'login' } },
    { path: 'register', component: RegisterComponent, data: { title: 'registration' } },
    { path: 'jobs/view/:id', component: JobViewComponent },
    { path: 'candidates/:id', component: SeekerViewComponent },
    { path: 'messages', component: ChatComponent, data: { title: 'messages' } },
  ]
;
