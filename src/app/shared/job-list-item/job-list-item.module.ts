import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '../_pipes/translate.module';

import { JobListItemComponent } from './job-list-item.component';

@NgModule({
  imports: [CommonModule, TranslateModule],
  declarations: [JobListItemComponent],
  exports: [JobListItemComponent]
})
export class JobListItemModule {}
