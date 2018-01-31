import { Component } from '@angular/core';

import { AppHttpService } from '../../../shared/_services/employer/app-http.service';

import { Employer } from '../../../shared/_models/employer.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  employer = new Employer;

  logo: File;
  logoPreview: string;

  constructor(private appHttp: AppHttpService) {}

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
