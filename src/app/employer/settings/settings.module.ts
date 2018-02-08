import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material';
import { UserFormModule } from './users/user-form/user-form.module';
import { DataTableModule } from '../../shared/data-table/data-table.module';
import { SafeUrlModule } from '../../shared/_pipes/safe-url.module';

import { SettingsComponent } from './settings.component';
import { UsersComponent } from './users/users.component';
import { EmployersComponent } from './employers/employers.component';
import { EmployerFormComponent } from './employers/employer-form/employer-form.component';

import { EmployerService } from '../../shared/_services/http/employer.service';
import { UserService } from '../../shared/_services/http/user.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    UserFormModule,
    MatProgressSpinnerModule,
    DataTableModule,
    SafeUrlModule
  ],
  declarations: [SettingsComponent, UsersComponent, EmployersComponent, EmployerFormComponent],
  providers: [EmployerService, UserService]
})
export class SettingsModule {}
