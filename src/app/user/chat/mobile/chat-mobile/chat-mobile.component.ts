import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HelpersService } from '../../../../shared/_services/helpers.service';
import { UserSessionService } from '../../../../shared/_services/user-session.service';

import { Chat } from '../../../../shared/_models/chat.model';
import { User } from '../../../../shared/_models/user.model';

@Component({
  selector: 'app-chat-mobile',
  templateUrl: './chat-mobile.component.html',
  styleUrls: ['../../chat-shared.css', './chat-mobile.component.css'],
  providers: [HelpersService, UserSessionService]
})
export class ChatMobileComponent implements OnInit {

  chat: Chat;
  user: User;

  constructor(private route: ActivatedRoute, private helpers: HelpersService, private userSession: UserSessionService) {}

  ngOnInit() {
    this.user = this.userSession.getUser();
    this.chat = this.route.snapshot.data['chat'];
  }
}
