import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material';

import { DataTableModule } from '../../shared/data-table/data-table.module';
import { TranslateModule } from '../../shared/_pipes/translate.module';

import { InterviewComponent } from './interview.component';

import { TranslatePipe } from '../../shared/_pipes/translate.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatProgressSpinnerModule,
    DataTableModule,
    TranslateModule
  ],
  declarations: [InterviewComponent],
  providers: [TranslatePipe]
})
export class InterviewModule { }
