import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '../../../shared/_pipes/translate.module';

import { SeekerViewComponent } from './seeker-view.component';

@NgModule({
  imports: [CommonModule, RouterModule, TranslateModule],
  exports: [SeekerViewComponent],
  declarations: [SeekerViewComponent],
})
export class SeekerViewModule {}
