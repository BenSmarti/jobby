import { ChatMessage } from './chat-message.model';
import { ChatPartner } from './chat-partner.model';

export class Chat {
  id: number;
  partner: ChatPartner;
  messages: ChatMessage[];
  lastMessageTime: string;
}
