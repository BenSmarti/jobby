import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {TranslationsComponent} from '../../shared/translations/translations.component';

import {AppHttpService} from '../../shared/_services/http/app-http.service';
import {UserSessionService} from '../../shared/_services/user-session.service';

import {User} from '../../shared/_models/user.model';
import {Employer} from '../../shared/_models/employer.model';
import {LocaleService} from '../../shared/_services/locale.service';

import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent extends TranslationsComponent {

  user = new User();
  employer = new Employer();

  logo: File;
  logoPreview: string;

  constructor(private router: Router, private userSession: UserSessionService, private appHttp: AppHttpService,
              localeService: LocaleService) {
    super(localeService);
  }

  animalControl = new FormControl('', [Validators.required]);

  animals = [
    {name: 'Dog', sound: 'Woof!'},
    {name: 'Cat', sound: 'Meow!'},
    {name: 'Cow', sound: 'Moo!'},
    {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
  ];

  setLogo(logo: File): void {
    this.logo = logo;

    const reader = new FileReader();

    reader.onload = (event: ProgressEvent) => {
      this.logoPreview = event.target['result'];
    };

    reader.readAsDataURL(logo);
  }

  removeLogo(): void {
    this.logo = null;
    this.logoPreview = null;
  }

  submit(isValid: boolean): void {
    if (isValid) {
      this.appHttp.register(this.employer);
    }
  }
}
