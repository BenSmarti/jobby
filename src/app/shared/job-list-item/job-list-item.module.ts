import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobListItemComponent } from './job-list-item.component';

@NgModule({
  imports: [CommonModule],
  declarations: [JobListItemComponent],
  exports: [JobListItemComponent]
})
export class JobListItemModule {}
