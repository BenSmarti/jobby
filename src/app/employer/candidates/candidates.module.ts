import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatChipsModule, MatDialogModule, MatProgressSpinnerModule } from '@angular/material';
import { StarRatingModule } from 'angular-star-rating';
import { DataTableModule } from '../../shared/data-table/data-table.module';

import { CandidatesComponent } from './candidates.component';
import { NewInterviewComponent } from './new-interview/new-interview.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatProgressSpinnerModule, MatDialogModule, MatChipsModule,
    StarRatingModule.forRoot(),
    DataTableModule
  ],
  declarations: [CandidatesComponent, NewInterviewComponent],
  entryComponents: [NewInterviewComponent]
})
export class CandidatesModule {}
