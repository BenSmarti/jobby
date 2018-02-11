import { Component, Input, Output, EventEmitter, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { UserSessionService } from '../shared/_services/user-session.service';

import { User } from '../shared/_models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() lang;
  @Output() langChanged = new EventEmitter();

  user: User;

  activeMenuLinks;

  employerMenuLinks = ['candidates', 'jobs', 'interviews', 'messages'];
  seekerMenuLinks = ['candidates', 'jobs', 'interviews', 'messages'];

  pageTitle: string;

  pageWidth: number;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.pageWidth = event.target.innerWidth;
  }

  constructor (private router: Router, private route: ActivatedRoute, private userSession: UserSessionService) {}

  ngOnInit() {
    this.pageWidth = window.innerWidth;
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
