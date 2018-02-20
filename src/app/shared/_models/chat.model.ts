import { Employer } from './employer.model';
import { Seeker } from './seeker.model';
import { ChatMessage } from './chat-message.model';

export class Chat {
  id: number;
  employer: Employer;
  seeker: Seeker;
  messages: ChatMessage[];
  lastMessageTime: string;
}
