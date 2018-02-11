import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule, MatProgressSpinnerModule } from '@angular/material';

import { TranslateModule } from '../../shared/_pipes/translate.module';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { AppHttpService } from '../../shared/_services/http/app-http.service';
import { UserSessionService } from '../../shared/_services/user-session.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatProgressSpinnerModule, MatCheckboxModule,
    TranslateModule
  ],
  declarations: [RegisterComponent, LoginComponent],
  providers: [UserSessionService, AppHttpService]
})
export class AuthenticationModule {}
