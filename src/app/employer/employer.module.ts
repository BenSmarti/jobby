import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { JobModule } from './job/job.module';
import { CandidatesModule } from './candidates/candidates.module';
import { SettingsModule } from './settings/settings.module';
import { ChatModule } from '../shared/chat/chat.module';
import { JobViewModule } from '../shared/job-view/job-view.module';
import { SeekerViewModule } from '../shared/seeker-view/seeker-view.module';
import { ChatMobileModule } from '../shared/chat-mobile/chat-mobile.module';
import { ChatListModule } from '../shared/chat-list/chat-list.module';

import { EmployerActiveJobsResolve } from '../shared/_resolves/employer-jobs.resolve';


@NgModule({
  imports: [
    BrowserModule,
    JobModule,
    CandidatesModule,
    SettingsModule,
    ChatModule,
    ChatMobileModule,
    ChatListModule,
    JobViewModule,
    SeekerViewModule
  ],
  providers: [EmployerActiveJobsResolve]
})
export class EmployerModule {}
