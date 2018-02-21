import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomeModule } from './home/home.module';
import { JobSearchModule } from '../public/job-search/job-search.module';
import { MyJobbyModule } from './my-jobby/my-jobby.module';
import { InterviewModule } from './interview/interview.module';

@NgModule({
  imports: [
    BrowserModule,
    HomeModule,
    JobSearchModule,
    MyJobbyModule,
    InterviewModule
  ]
})
export class SeekerModule {}
