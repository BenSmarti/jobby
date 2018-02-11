import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '../_pipes/translate.module';

import { DataTableComponent } from './data-table.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  imports: [CommonModule, RouterModule, TranslateModule],
  exports: [PaginationComponent],
  declarations: [DataTableComponent, PaginationComponent]
})
export class DataTableModule {}
