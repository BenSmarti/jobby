import { User } from './user.model';
import { Country } from './country.model';

export class Seeker {
  firstName: string;
  lastName: string;
  email: string;
  birthday: string;
  phone: string;
  image: string;
  gender: 'male' | 'female';
  address: string;
  city: string;
  country: Country;
  zipcode: string;
  relationshipStatus: string;
  user: User;

  constructor() {
    this.user = new User;
    this.country = new Country();
  }
}
