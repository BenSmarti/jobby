import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '../../../shared/_pipes/translate.module';

import { JobListItemComponent } from './job-list-item.component';

@NgModule({
  imports: [CommonModule, RouterModule, TranslateModule],
  exports: [JobListItemComponent],
  declarations: [JobListItemComponent]
})
export class JobListItemModule {}
