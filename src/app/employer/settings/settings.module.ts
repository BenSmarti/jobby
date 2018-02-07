import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormModule } from './user-form/user-form.module';

import { SettingsComponent } from './settings.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  imports: [
    CommonModule,
    UserFormModule
  ],
  declarations: [SettingsComponent, UsersComponent]
})
export class SettingsModule {}
