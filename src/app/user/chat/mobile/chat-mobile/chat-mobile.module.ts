import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '../../../../shared/_pipes/translate.module';

import { ChatMobileComponent } from './chat-mobile.component';

import { ChatService } from '../../../../shared/_services/http/chat.service';

import { ChatResolve } from '../../../../shared/_resolves/chat.resolve';

@NgModule({
  imports: [CommonModule, TranslateModule],
  declarations: [ChatMobileComponent],
  providers: [ChatService, ChatResolve]
})
export class ChatMobileModule {}
