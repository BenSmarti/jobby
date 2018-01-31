import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { TranslationsComponent } from '../../shared/translations/translations.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends TranslationsComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    super();
  }

  ngOnInit() {
  }

}
