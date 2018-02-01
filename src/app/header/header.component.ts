import {Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { TranslationsComponent } from '../shared/translations/translations.component';

import { LocaleService } from '../shared/_services/locale.service';
import { UserSessionService } from '../shared/_services/user-session.service';

import { User } from '../shared/_models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent extends TranslationsComponent implements OnInit {
  @Input() lang;
  @Output() langChanged = new EventEmitter();

  user: User;

  activeMenuLinks;

  employerMenuLinks = ['candidates', 'jobs', 'interviews', 'messages'];
  seekerMenuLinks = ['candidates', 'jobs', 'interviews', 'messages'];

  constructor (localeService: LocaleService, private userSession: UserSessionService) {
    super(localeService);
  }

  ngOnInit() {
    this.init();
    this.userSession.loggedInSubject.subscribe(() => this.init());
  }

  private init(): void {
    if (this.userSession.isLoggedIn()) {
      this.user = this.userSession.getUser();
      this.activeMenuLinks = (this.user.role === 'employer') ? this.employerMenuLinks : this.seekerMenuLinks;
    } else {
      this.user = null;
      this.activeMenuLinks = [];
    }
  }

  changeLang(): void {
    this.langChanged.emit(this.lang);
  }

  employerLogin(): void {
    const user = new User();
    user.username = 'employer@test.com';
    user.role = 'employer';
    this.userSession.login(user);
  }

  seekerLogin(): void {
    const user = new User();
    user.username = 'seeker@test.com';
    user.role = 'seeker';
    this.userSession.login(user);
  }

  logout(): void {
    this.userSession.logout();
  }
}
