import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AppHttpService } from '../../../shared/_services/http/app-http.service';
import { UserSessionService } from '../../../shared/_services/user-session.service';

import { Employer } from '../../../shared/_models/employer.model';
import { Seeker } from '../../../shared/_models/seeker.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../authentication.css']
})
export class RegisterComponent {

  activeTab: 'employer' | 'seeker' = 'seeker';

  repeatPassword: string;

  employer = new Employer();
  seeker = new Seeker();

  isRegisterFailed: boolean;
  isSubmitting = false;
  registerError = false;

  constructor(private router: Router, private userSession: UserSessionService, private appHttp: AppHttpService) {}

  submit(isValid: boolean) {
    if (!isValid) {
      return;
    }

    this.isRegisterFailed = false;
    this.isSubmitting = true;

    if (this.activeTab === 'employer') {
      this.appHttp.registerEmployer(this.employer).then(response => this.handleResponse(response))
    } else {
      this.appHttp.registerSeeker(this.seeker).then(response => this.handleResponse(response));
    }
  }

  handleResponse(response): void {
    if (response) {
      const user = { token: response };
      if (this.activeTab === 'employer') {
        user['username'] = this.employer.Email;
        user['type'] = 'employer';
      } else {
        user['username'] = this.seeker.Email;
        user['type'] = 'seeker';
      }

      this.userSession.login(user);
      this.router.navigate(['/' + this.activeTab]);
    } else {
      this.registerError = true;
      this.isSubmitting = false;
    }
  }
}
