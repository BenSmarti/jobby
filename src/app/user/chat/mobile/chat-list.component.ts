import { Component, OnInit } from '@angular/core';

import { HelpersService } from '../../../shared/_services/helpers.service';
import { ChatService } from '../../../shared/_services/http/chat.service';

import { Chat } from '../../../shared/_models/chat.model';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css'],
  providers: [HelpersService, ChatService]
})
export class ChatListComponent implements OnInit {

  q: string;

  chats: Chat[];

  constructor(public helpers: HelpersService, private chatService: ChatService) {}

  ngOnInit() {
    this.chatService.getChats(this.q).then(response => this.chats = response);
  }
}
