import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '../../shared/_pipes/translate.module';
import { JobListItemModule } from '../shared/job-list-item/job-list-item-module';

import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    JobListItemModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule {}
