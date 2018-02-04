import { Routes } from '@angular/router';

import { PUBLIC_ROUTES } from './public.routes';
import { EMPLOYER_ROUTES } from './employer.routes';

import { AppComponent } from '../../app.component';

import { TranslationsResolve } from '../_resolves/translations.resolve';

export const APP_ROUTES: Routes = [
  {
    path: '', component: AppComponent, resolve: { translations: TranslationsResolve }, children: [
      { path: '', children: PUBLIC_ROUTES },
      { path: '', children: EMPLOYER_ROUTES },
    ]
  }
];
