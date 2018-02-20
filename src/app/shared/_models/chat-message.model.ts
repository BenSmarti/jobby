import { Seeker } from './seeker.model';
import { Employer } from './employer.model';

export class ChatMessage {
  date: string;
  creator: Seeker | Employer;
  content: string;
}
