import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { ChangePasswordComponent } from './change-password/change-password.component';

import { UserSessionService } from '../../../../shared/_services/user-session.service';

import { User } from '../../../../shared/_models/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styles: [`.box-shadow { margin-top: 150px; }`]
})
export class UserFormComponent implements OnInit {

  user = new User;

  constructor(private dialog: MatDialog, private userSession: UserSessionService) {}

  ngOnInit() {
    this.user = this.userSession.getUser();
  }

  submit(isValid: boolean): void {}

  openPasswordModal(): void {
    this.dialog.open(ChangePasswordComponent, {
      height: '330px',
      width: '500px'
    });
  }
}
