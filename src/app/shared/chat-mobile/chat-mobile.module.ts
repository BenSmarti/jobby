import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatMobileComponent } from './chat-mobile.component';

import { ChatService } from '../_services/http/chat.service';

import { ChatResolve } from '../_resolves/chat.resolve';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ChatMobileComponent],
  providers: [ChatService, ChatResolve]
})
export class ChatMobileModule {}
