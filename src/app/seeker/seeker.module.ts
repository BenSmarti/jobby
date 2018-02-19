import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { JobModule } from './job/job.module';

@NgModule({
  imports: [
    BrowserModule,
    JobModule
  ],
  providers: []
})
export class SeekerModule {}
