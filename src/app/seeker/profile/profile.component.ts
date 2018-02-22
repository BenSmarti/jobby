import { Component, OnInit } from '@angular/core';

import { SeekerService } from '../../shared/_services/http/seeker.service';
import { MiscService } from '../../shared/_services/http/misc.service';

import { Seeker } from '../../shared/_models/seeker.model';
import { Country } from '../../shared/_models/country.model';

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

  constructor(private seekerService: SeekerService, private miscService: MiscService) {}

  ngOnInit() {
    this.seekerService.getSeeker().then(response => {
      if (response) {
        this.seeker = response;
      }
    });

    this.miscService.getCountries().then(response => this.countries = response);
  }

}
