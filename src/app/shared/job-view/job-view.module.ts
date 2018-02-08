import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { JobViewComponent } from './job-view.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [JobViewComponent],
  declarations: [JobViewComponent],
})
export class JobViewModule {}
