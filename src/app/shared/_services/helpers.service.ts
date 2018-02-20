import { Employer } from '../_models/employer.model';

import { environment } from '../../../environments/environment';

export class HelpersService {
  getEmployerLogo(employer: Employer): string {
    if (employer.logo) {
      return environment.uploadsPath + '/employers/' + employer.id + '/' + employer.logo;
    }

    return '/assets/img/logo-placeholder.svg';
  }
}
