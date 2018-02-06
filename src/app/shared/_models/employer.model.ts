import { User } from './user.model';

export class Employer {
  name: string;
  user: User;

  constructor() {
    this.user = new User;
  }
}
