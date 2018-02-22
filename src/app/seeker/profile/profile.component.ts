import { Component, OnInit } from '@angular/core';

import { SeekerService } from '../../shared/_services/http/seeker.service';
import { MiscService } from '../../shared/_services/http/misc.service';

import { Seeker } from '../../shared/_models/seeker.model';
import { Country } from '../../shared/_models/country.model';

import { JobExperience } from '../../shared/_models/job-experience.model';
import { Education } from '../../shared/_models/education.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [SeekerService, MiscService]
})
export class ProfileComponent implements OnInit {

  activeTab: 'contactInfo' | 'resume' = 'contactInfo';

  seeker = new Seeker;
  countries: Country[] = [];

  image: File;

  constructor(private seekerService: SeekerService, private miscService: MiscService) {}

  ngOnInit() {
    this.seekerService.getSeeker().then(response => {
      if (response) {
        this.seeker = response;
      }
    });

    this.miscService.getCountries().then(response => this.countries = response);
  }

  // uploadImage(image: File): void {
  //
  //   const imageName = image.name.substr(image.name.indexOf('.') + 1);
  //   if (['jpg', 'jpeg', 'png', 'gif', 'svg'].indexOf(imageName) === -1) {
  //     return;
  //   }
  //
  //   const reader = new FileReader();
  //   reader.onload = ((event: ProgressEvent) => this.seeker.image = event.target['result']);
  //
  //   reader.readAsDataURL(image);
  //   this.image = image;
  // }
  //
  // addExperience(): void {
  //   this.seeker.experience.push(new JobExperience);
  // }
  //
  // addEducation(): void {
  //   this.seeker.education.push(new Education);
  // }
  //
  // removeExperience(index: number): void {
  //   this.seeker.experience.splice(index, 1);
  // }
  //
  // removeEducation(index: number): void {
  //   this.seeker.education.splice(index, 1);
  // }
}
