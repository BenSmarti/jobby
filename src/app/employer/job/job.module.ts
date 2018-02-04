import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material';
import { Select2Module } from 'ng2-select2';
import { DataTableModule } from '../../shared/data-table/data-table.module';

import { JobComponent } from './job.component';

import { JobService } from '../../shared/_services/http/job.service';
import { JobFormComponent } from './job-form/job-form.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatProgressSpinnerModule,
    Select2Module,
    DataTableModule
  ],
  declarations: [JobComponent, JobFormComponent],
  providers: [JobService]
})
export class JobModule {}
