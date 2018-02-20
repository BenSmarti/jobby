import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MyJobbyModule } from './my-jobby/my-jobby.module';
import { JobModule } from './job/job.module';
import { InterviewModule } from './interview/interview.module';
import { ChatModule } from '../shared/chat/chat.module';
import { ChatListModule } from '../shared/chat-list/chat-list.module';
import { ChatMobileModule } from '../shared/chat-mobile/chat-mobile.module';

@NgModule({
  imports: [
    BrowserModule,
    MyJobbyModule,
    JobModule,
    InterviewModule,
    ChatModule,
    ChatMobileModule,
    ChatListModule,
  ]
})
export class SeekerModule {}
