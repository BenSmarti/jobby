import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatMenuModule } from '@angular/material';

import { SafeUrlModule } from '../../../../shared/_pipes/safe-url.module';
import { TranslateModule } from '../../../../shared/_pipes/translate.module';

import { UserFormComponent } from './user-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatMenuModule, MatDialogModule,
    SafeUrlModule,
    TranslateModule
  ],
  declarations: [UserFormComponent, ChangePasswordComponent],
  entryComponents: [ChangePasswordComponent]
})
export class UserFormModule {}
