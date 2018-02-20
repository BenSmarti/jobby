import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '../_pipes/translate.module';

import { ChatListComponent } from './chat-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule
  ],
  declarations: [ChatListComponent]
})
export class ChatListModule {}
