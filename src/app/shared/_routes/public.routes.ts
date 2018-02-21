import { Routes } from '@angular/router';

import { HomeComponent } from '../../public/home/home.component';
import { LoginComponent } from '../../public/authentication/login/login.component';
import { RegisterComponent } from '../../public/authentication/register/register.component';
import { JobViewComponent } from '../../employer/job/job-view/job-view.component';
import { SeekerViewComponent } from '../../employer/candidates/seeker-view/seeker-view.component';
import { ChatComponent } from '../../user/chat/desktop/chat.component';
import { ChatListComponent } from '../../user/chat/mobile/chat-list.component';
import { ChatMobileComponent } from '../../user/chat/mobile/chat-mobile/chat-mobile.component';

import { ChatResolve } from '../_resolves/chat.resolve';
import {JobSearchComponent} from '../../public/job-search/job-search.component';

// TODO: set another route - secure route for both seeker and employer

export const PUBLIC_ROUTES: Routes = [
    { path: '', component: HomeComponent, data: { title: 'home'} },
    { path: 'login', component: LoginComponent, data: { title: 'login' } },
    { path: 'register', component: RegisterComponent, data: { title: 'registration' } },
    { path: 'search', component: JobSearchComponent, data: { title: 'search'} },
    { path: 'jobs/view/:id', component: JobViewComponent },
    { path: 'candidates/:id', component: SeekerViewComponent },
    { path: 'chats', component: ChatComponent, data: { title: 'chats' } },
    { path: 'm/chats', component: ChatListComponent, data: { title: 'chats' } },
    { path: 'm/chats/:id', component: ChatMobileComponent, data: { title: 'chat' }, resolve: { chat: ChatResolve }},
  ]
;
