import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSliderModule } from '@angular/material';
import { TranslateModule } from '../../shared/_pipes/translate.module';

import { PreferencesComponent } from './preferences.component';

@NgModule({
  imports: [
    CommonModule,
    MatSliderModule,
    TranslateModule
  ],
  declarations: [PreferencesComponent]
})
export class PreferencesModule {}
