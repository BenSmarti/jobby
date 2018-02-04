import {Routes} from '@angular/router';

import {HomeComponent} from '../../public/home/home.component';
import {LoginComponent} from '../../public/login/login.component';
import {RegisterComponent} from '../../public/register/register.component';

export const PUBLIC_ROUTES: Routes = [
    {path: '', component: HomeComponent, data: {title: 'home'}},
    {path: 'login', component: LoginComponent}, // TODO add data: {title: 'login'}
    {path: 'register', component: RegisterComponent}

  ]
;
