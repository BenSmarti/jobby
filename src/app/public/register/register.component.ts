import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {TranslationsComponent} from '../../shared/translations/translations.component';

import {AppHttpService} from '../../shared/_services/http/app-http.service';
import {UserSessionService} from '../../shared/_services/user-session.service';

import {User} from '../../shared/_models/user.model';
import {Employer} from '../../shared/_models/employer.model';
import {Seeker} from '../../shared/_models/seeker.model';
import {LocaleService} from '../../shared/_services/locale.service';

import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent extends TranslationsComponent {

  user = new User();
  seeker = new Seeker();
  employer = new Employer();
  object: {};

  isLoginFailed: boolean;
  isLoggingIn = false;

  constructor(private router: Router, private userSession: UserSessionService, private appHttp: AppHttpService,
              localeService: LocaleService) {
    super(localeService);
  }

  isEmployer(seeker: string) {
    if (typeof seeker === 'string') {
      return this.seeker;
    }
    return this.employer;
  }

  submit(isValid: boolean) {

    if (isValid) {
      this.isLoginFailed = false;
      this.isLoggingIn = true;

      // this.appHttp.register(this.user, this.object = this.isEmployer(this.seeker.seekername)) // TODO expects one argument
      //   .then((response) => setTimeout(() => this.handleResponse(response), 2000));
    }
  }


  submit(isValid: boolean): void {
    if (isValid) {
      this.appHttp.register();

    this.isLoggingIn = false;
  }
}
