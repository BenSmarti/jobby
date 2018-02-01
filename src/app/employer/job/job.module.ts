import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material';
import { DataTableModule } from '../../shared/data-table/data-table.module';

import { JobComponent } from './job.component';

import { JobService } from '../../shared/_services/http/job.service';

@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    DataTableModule
  ],
  declarations: [JobComponent],
  providers: [JobService]
})
export class JobModule {}
