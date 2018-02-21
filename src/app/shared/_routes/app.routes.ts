import { Routes } from '@angular/router';

import { PUBLIC_ROUTES } from './public.routes';
import { EMPLOYER_ROUTES } from './employer.routes';
import { SEEKER_ROUTES } from './seeker.routes';

import { AppComponent } from '../../app.component';

import { TranslationsResolve } from '../_resolves/translations.resolve';

import { LoggedInGuard } from '../_guards/LoggedIn.guard';

export const APP_ROUTES: Routes = [
  {
    path: '', component: AppComponent, resolve: { translations: TranslationsResolve }, children: [
      { path: '', children: PUBLIC_ROUTES },
      { path: 'employer', children: EMPLOYER_ROUTES },
      { path: 'seeker', children: SEEKER_ROUTES },
      { path: '**', redirectTo: '', pathMatch: 'full' }
    ]
  }
];
