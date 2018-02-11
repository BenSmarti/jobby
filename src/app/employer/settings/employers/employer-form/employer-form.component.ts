import { Component, OnInit } from '@angular/core';

import { Employer } from '../../../../shared/_models/employer.model';

@Component({
  selector: 'app-employer-form',
  templateUrl: './employer-form.component.html'
})
export class EmployerFormComponent implements OnInit {

  employer = new Employer;

  logoPreview;

  ngOnInit() {}

  uploadLogo(file: File): void {
    const reader = new FileReader();
    reader.onload = ((event: ProgressEvent) => this.logoPreview = event.target['result']);

    reader.readAsDataURL(file);
  }

  resetLogo(logoInput): void {
    logoInput.value = '';
    this.logoPreview = null;
  }
}
