import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '../../shared/_pipes/translate.module';

import { JobComponent } from './job.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  declarations: [JobComponent]
})
export class JobModule {}
