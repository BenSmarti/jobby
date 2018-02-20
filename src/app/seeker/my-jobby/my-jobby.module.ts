import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material';
import { StarRatingModule } from 'angular-star-rating';

import { DataTableModule } from '../../shared/data-table/data-table.module';
import { TranslateModule } from '../../shared/_pipes/translate.module';
import { JobListItemModule } from '../shared/job-list-item/job-list-item-module';

import { MyJobbyComponent } from './my-jobby.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatProgressSpinnerModule,
    StarRatingModule,
    DataTableModule,
    TranslateModule,
    JobListItemModule
  ],
  declarations: [MyJobbyComponent]
})
export class MyJobbyModule {}
