import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from './base-http.service';
import { UserSessionService } from '../user-session.service';

import { Chat } from '../../_models/chat.model';

@Injectable()
export class ChatService extends BaseHttpService {

  readonly endPoint = this.apiUrl + '/chat';

  constructor(userSession: UserSessionService, private http: HttpClient) {
    super(userSession);
  }

  getChats(q?: string): Promise<Chat[]> {
    const options = {
      headers: this.getTokenHeaders(),
    };

    if (q) {
      options['params'] = { q: q };
    }

    return this.http.get(this.endPoint, options)
    .toPromise()
    .then(response => response as Chat[])
    .catch(() => null);
  }

  getChat(chatID: number): Promise<Chat> {
    return this.http.get(this.endPoint + '/' + chatID, this.getTokenRequest())
    .toPromise()
    .then(response => response as Chat)
    .catch(() => null);
  }
}
