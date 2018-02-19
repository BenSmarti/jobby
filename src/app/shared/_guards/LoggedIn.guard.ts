import { Injectable } from '@angular/core';

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserSessionService } from '../_services/user-session.service';

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private userSession: UserSessionService){}

  canActivate(route?: ActivatedRouteSnapshot, state?: RouterStateSnapshot): boolean {
    return !this.userSession.isLoggedIn();
  }
}
