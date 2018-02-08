import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SeekerViewComponent } from './seeker-view.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [SeekerViewComponent],
  declarations: [SeekerViewComponent],
})
export class SeekerViewModule {}
