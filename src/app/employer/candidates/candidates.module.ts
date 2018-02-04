import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableModule } from '../../shared/data-table/data-table.module';

import { CandidatesComponent } from './candidates.component';

@NgModule({
  imports: [
    CommonModule,
    DataTableModule
  ],
  declarations: [CandidatesComponent]
})
export class CandidatesModule {}
