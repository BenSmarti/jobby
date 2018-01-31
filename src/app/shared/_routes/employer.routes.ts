import {Routes} from '@angular/router';
import {LoginComponent} from '../../public/login/login.component';
import {RegisterComponent} from '../../public/register/register.component';

export const EMPLOYER_ROUTES: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];
