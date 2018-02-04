import { Employer } from './employer.model';

export class Job {
  employer: Employer;
  title: string;
  type: 'Full Time' | 'Part Time' | 'Freelance';
  location: string;
  level: 'High Level' | 'Mid Level' | 'Low Level';
  minSalary: number;
  maxSalary: number;
  salaryMethod: 'monthly' | 'hourly';
  description: string;
  requirements: string;
  created: string;
}
