import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { ChatService } from '../_services/http/chat.service';

import { Chat } from '../_models/chat.model';

@Injectable()
export class ChatResolve implements Resolve<Chat[]> {

  constructor(private chatService: ChatService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.chatService.getChat(+route.params['id']).then(response => response as Chat[]);
  }
}
