import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {
  MatCheckboxModule, MatChipsModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule,
  MatSelectModule, MatRadioModule
} from '@angular/material';

import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { UserSessionService } from '../shared/_services/user-session.service';
import { AppHttpService } from '../shared/_services/http/app-http.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule, MatInputModule, MatCheckboxModule, MatSelectModule, MatProgressSpinnerModule, MatChipsModule, MatRadioModule
  ],
  declarations: [HomeComponent, RegisterComponent, LoginComponent],
  providers: [UserSessionService, AppHttpService]
})
export class PublicModule {}
