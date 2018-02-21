import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule, MatMenuModule, MatSelectModule } from '@angular/material';

import { TranslateModule } from './shared/_pipes/translate.module';
import { HomeModule } from './public/home/home.module';
import { AuthenticationModule } from './public/authentication/authentication.module';
import { EmployerModule } from './employer/employer.module';
import { SeekerModule } from './seeker/seeker.module';

import { BaseComponent } from './base.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

import { TranslationService } from './shared/_services/http/translation.service';
import { LocaleService } from './shared/_services/locale.service';

import { TranslationsResolve } from './shared/_resolves/translations.resolve';
import { JobResolve } from './shared/_resolves/job.resolve';

import { LoggedInGuard } from './shared/_guards/LoggedIn.guard';

import { APP_ROUTES } from './shared/_routes/app.routes';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    BaseComponent,
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule,
    MatSelectModule, MatFormFieldModule, MatMenuModule,
    TranslateModule,
    HomeModule,
    AuthenticationModule,
    EmployerModule,
    SeekerModule,
    UserModule
  ],
  providers: [LocaleService, TranslationService, TranslationsResolve, JobResolve, LoggedInGuard],
  bootstrap: [BaseComponent]
})
export class AppModule {}
