import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatChipsModule, MatFormFieldModule, MatMenuModule, MatSelectModule } from '@angular/material';
import { PublicModule } from './public/public.module';
import { JobModule } from './employer/job/job.module';
import { CandidatesModule } from './employer/candidates/candidates.module';
import { SettingsModule } from './employer/settings/settings.module';

import { AppComponent } from './app.component';
import { BaseComponent } from './base.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { JobViewComponent } from './shared/job-view/job-view.component';
import { SeekerViewComponent } from './shared/seeker-view/seeker-view.component';
import { ChatComponent } from './shared/chat/chat.component';

import { TranslationService } from './shared/_services/http/translation.service';
import { LocaleService } from './shared/_services/locale.service';
import { TranslationsResolve } from './shared/_resolves/translations.resolve';
import { EmployerActiveJobsResolve } from './shared/_resolves/employer-jobs.resolve';

import { APP_ROUTES } from './shared/_routes/app.routes';

@NgModule({
  declarations: [
    BaseComponent,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    JobViewComponent,
    SeekerViewComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES),
    MatSelectModule, MatFormFieldModule, MatChipsModule, MatMenuModule,
    PublicModule,
    JobModule,
    CandidatesModule,
    SettingsModule
  ],
  providers: [LocaleService, TranslationService, TranslationsResolve, EmployerActiveJobsResolve],
  bootstrap: [BaseComponent]
})
export class AppModule {
}
