import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material';

import { TranslateModule } from '../../shared/_pipes/translate.module';

import { SettingsComponent } from './settings.component';

@NgModule({
  imports: [
    CommonModule,
    MatSlideToggleModule,
    TranslateModule
  ],
  declarations: [SettingsComponent]
})
export class SettingsModule {}
