import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

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

  pageTitle: string;

  constructor (private router: Router, private route: ActivatedRoute, localeService: LocaleService,
               private userSession: UserSessionService) {
    super(localeService);
  }

  ngOnInit() {
    this.init();
    this.userSession.loggedInSubject.subscribe(() => this.init());
    this.setPageTitle();
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

  private setPageTitle(): void {
    let activeRoute = this.route;
    while (activeRoute.firstChild) {
      activeRoute = activeRoute.firstChild;
    }

    this.pageTitle = activeRoute.snapshot.data.title;

    this.router.events
      .filter((event) => event instanceof NavigationEnd)
      .map(() => this.route)
      .map((route) => {
        while (route.firstChild) {
          route = route.firstChild;
        }

        return route;
      })
      .filter((route) => route.outlet === 'primary')
      .mergeMap((route) => route.data)
      .subscribe((event) => this.pageTitle = event.title);
  }

  changeLang(): void {
    this.langChanged.emit(this.lang);
  }

  logout(): void {
    this.userSession.logout();
  }
}
