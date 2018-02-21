import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SmartSelectComponent } from './smart-select.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [SmartSelectComponent]
})
export class SmartSelectModule {}
