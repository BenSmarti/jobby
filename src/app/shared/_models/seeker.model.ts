import { User } from './user.model';
import { Country } from './country.model';
import { Education } from './education.model';
import { JobExperience } from './job-experience.model';

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
  experience: JobExperience[];
  education: Education[];

  constructor() {
    this.user = new User;
    this.country = new Country;

    this.experience = [];
    this.experience.push(new JobExperience);

    this.education = [];
    this.education.push(new Education);
  }
}
