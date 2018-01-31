import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatCheckboxModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule, MatSelectModule } from '@angular/material';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { UserSessionService } from '../shared/_services/user-session.service';
import { AppHttpService } from '../shared/_services/http/app-http.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule, MatInputModule, MatCheckboxModule, MatSelectModule, MatProgressSpinnerModule
  ],
  declarations: [RegisterComponent, LoginComponent, HomeComponent],
  providers: [UserSessionService, AppHttpService]
})
export class PublicModule {}
