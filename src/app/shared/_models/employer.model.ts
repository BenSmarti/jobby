import { User } from './user.model';

export class Employer {
  id: number;
  name: string;
  logo: string;
  user: User;

  constructor() {
    this.user = new User;
  }
}
