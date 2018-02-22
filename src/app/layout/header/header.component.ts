import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { UserSessionService } from '../../shared/_services/user-session.service';

import { User } from '../../shared/_models/user.model';
import { JobSearchCriteria } from '../../shared/_generic/job-search-criteria';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('slideToggle', [
      state('hidden', style({
        width: '0',
        opacity: '0',
        display: 'none'
      })),
      state('shown', style({
        width: '80%',
        opacity: '1',
        display: '*'
      })),
      transition('hidden => shown', animate('200ms ease-in')),
      transition('shown => hidden', animate('200ms ease-out'))
    ]),
  ]
})
export class HeaderComponent implements OnInit {
  @Input() lang;
  @Input() pageWidth: number;

  @Output() langChanged = new EventEmitter();

  user: User;

  activeMenuLinks;

  employerMenuLinks = ['candidates', 'jobs', 'interviews'];
  seekerMenuLinks = [{ label: 'My Jobby', url: 'myJobby', translate: false }, 'interviews'];

  pageTitle: string;
  pageTitlePadded = false;
  translatePageTitle = true;

  mobileMenuState = 'hidden';

  searchCriteria = new JobSearchCriteria();

  constructor (private router: Router, private route: ActivatedRoute, private userSession: UserSessionService) {}

  ngOnInit() {
    this.init();
    this.userSession.loggedInSubject.subscribe(() => this.init());
    this.setPageTitle();
  }

  private init(): void {
    if (this.userSession.isLoggedIn()) {
      this.user = this.userSession.getUser();
      this.activeMenuLinks = (this.user.type === 'employer') ? this.employerMenuLinks : this.seekerMenuLinks;
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
    this.translatePageTitle = (activeRoute.snapshot.data.translateTitle !== false);
    this.pageTitlePadded = activeRoute.snapshot.data.paddedTitle;

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
      .subscribe((event) => {
        this.pageTitle = event.title;
        this.translatePageTitle = (event.translateTitle !== false);
        this.pageTitlePadded = !event.paddedTitle;
      });
  }

  changeLang(): void {
    this.langChanged.emit(this.lang);
  }

  logout(): void {
    if (this.pageWidth < 768) {
      this.mobileMenuState = 'hidden';
    }

    this.userSession.logout();
  }

  search(keyCode?: number): void {
    if (keyCode && keyCode !== 13) {
      return;
    }

    this.router.navigate(['/search'], { queryParams: this.searchCriteria });
  }
}
