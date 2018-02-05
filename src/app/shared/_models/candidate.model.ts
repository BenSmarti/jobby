import { Seeker } from './seeker.model';
import { Job } from './job.model';
import { Interview } from './interview.model';

export class Candidate {
  seeker: Seeker;
  job: Job;
  interview: Interview;
  status: string;
}
