import { Employer } from './employer.model';
import { JobCategory } from './job-category.model';

export class Job {
  id: number;
  employer: Employer;
  category: JobCategory;
  title: string;
  type: 'Full Time' | 'Part Time' | 'Freelance';
  role: string;
  location: string;
  minSalary: number;
  maxSalary: number;
  salaryMethod: 'monthly' | 'hourly';
  description: string;
  requirements: string;
  created: string;

  constructor() {
    this.category = new JobCategory();
  }
}
