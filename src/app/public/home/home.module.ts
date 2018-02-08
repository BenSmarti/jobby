import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatChipsModule } from '@angular/material';
import { JobListItemModule } from '../../shared/job-list-item/job-list-item.module';

import { HomeComponent } from './home.component';

@NgModule({
  imports: [CommonModule, BrowserAnimationsModule, MatChipsModule, JobListItemModule],
  declarations: [HomeComponent],
})
export class HomeModule {}
