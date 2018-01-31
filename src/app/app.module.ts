import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatSelectModule } from '@angular/material';
import { PublicModule } from './public/public.module';
import { EmployerModule } from './employer/employer.module';

import { AppComponent } from './app.component';
import { BaseComponent } from './base.component';

import { TranslationService } from './shared/_services/http/translation.service';
import { LocaleService } from './shared/_services/locale.service';
import { TranslationsResolve } from './shared/_resolves/translations.resolve';

import { APP_ROUTES } from './shared/_routes/app.routes';

@NgModule({
  declarations: [
    BaseComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES),
    PublicModule,
    EmployerModule,
    MatSelectModule, MatFormFieldModule
  ],
  providers: [LocaleService, TranslationService, TranslationsResolve],
  bootstrap: [BaseComponent]
})
export class AppModule {}
