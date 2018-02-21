import { NgModule } from '@angular/core';

import { ChatModule } from './chat/desktop/chat.module';
import { ChatMobileModule } from './chat/mobile/chat-mobile/chat-mobile.module';
import { ChatListModule } from './chat/mobile/chat-list.module';

@NgModule({
  imports: [
    ChatModule,
    ChatMobileModule,
    ChatListModule
  ]
})
export class UserModule {}
