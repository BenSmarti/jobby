import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { TranslationsComponent } from '../../../../shared/translations/translations.component';

import { UserSessionService } from '../../../../shared/_services/user-session.service';
import { LocaleService } from '../../../../shared/_services/locale.service';

import { User } from '../../../../shared/_models/user.model';
import {ChangePasswordComponent} from './change-password/change-password.component';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styles: [`.box-shadow { margin-top: 150px; }`]
})
export class UserFormComponent extends TranslationsComponent implements OnInit {

  user = new User;

  constructor(private dialog: MatDialog, localeService: LocaleService, private userSession: UserSessionService) {
    super(localeService);
  }

  ngOnInit() {
    this.user = this.userSession.getUser();
  }

  submit(isValid: boolean): void {

  }

  openPasswordModal(): void {
    this.dialog.open(ChangePasswordComponent, {
      height: '330px',
      width: '500px'
    });
  }
}
