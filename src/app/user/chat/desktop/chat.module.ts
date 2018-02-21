import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '../../../shared/_pipes/translate.module';

import { ChatComponent } from './chat.component';

@NgModule({
  imports: [CommonModule, FormsModule, TranslateModule],
  declarations: [ChatComponent]
})
export class ChatModule {}
