import { User } from './user.model';

export class Seeker {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  image: string;
  gender: 'male' | 'female';
  user: User;

  constructor() {
    this.user = new User;
  }

  getFullName(): string {
    return this.firstName + ' ' + this.lastName;
  }
}
