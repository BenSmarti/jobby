import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Chat } from '../_models/chat.model';

@Component({
  selector: 'app-chat-mobile',
  templateUrl: './chat-mobile.component.html',
  styleUrls: ['./chat-mobile.component.css']
})
export class ChatMobileComponent implements OnInit {

  chat: Chat;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.chat = this.route.snapshot.data['chat'];
  }
}
