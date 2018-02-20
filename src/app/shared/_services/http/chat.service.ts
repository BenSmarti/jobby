import { Injectable } from '@angular/core';

import { BaseHttpService } from './base-http.service';
import { UserSessionService } from '../user-session.service';

@Injectable()
export class ChatService extends BaseHttpService {

  constructor(userSession: UserSessionService) {
    super(userSession);
  }

  getChats(): Promise<Chat>
}
