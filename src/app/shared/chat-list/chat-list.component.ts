import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataTableComponent } from '../data-table/data-table.component';

import { ChatService } from '../_services/http/chat.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css'],
  providers: [ChatService]
})
export class ChatListComponent extends DataTableComponent implements OnInit {

  constructor(route: ActivatedRoute, private chatService: ChatService) {
    super(route);
  }

  fetchItems() {
    this.chatService.getChats().then(response => this.setItems(response));
  }

}
