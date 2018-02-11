import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '../_pipes/translate.module';

import { JobViewComponent } from './job-view.component';

@NgModule({
  imports: [CommonModule, RouterModule, TranslateModule],
  exports: [JobViewComponent],
  declarations: [JobViewComponent],
})
export class JobViewModule {}
