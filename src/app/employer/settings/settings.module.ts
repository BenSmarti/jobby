import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material';
import { UserFormModule } from './users/user-form/user-form.module';
import { DataTableModule } from '../../shared/data-table/data-table.module';

import { SettingsComponent } from './settings.component';
import { UsersComponent } from './users/users.component';
import { EmployersComponent } from './employers/employers.component';
import { EmployerFormComponent } from './employers/employer-form/employer-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    UserFormModule,
    MatProgressSpinnerModule,
    DataTableModule
  ],
  declarations: [SettingsComponent, UsersComponent, EmployersComponent, EmployerFormComponent]
})
export class SettingsModule {}
