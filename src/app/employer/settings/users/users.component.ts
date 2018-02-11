import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataTableComponent } from '../../../shared/data-table/data-table.component';

import { UserService } from '../../../shared/_services/http/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['../../../shared/data-table/data-table.component.css'],
})
export class UsersComponent extends DataTableComponent {

  readonly headers = [
    { column: 'userName', label: 'USERNAME' }, { column: 'role', label: 'ROLE' },
    { column: 'created', label: 'CREATION_DATE' },
  ];

  constructor(route: ActivatedRoute, private userService: UserService) {
    super(route);
  }

  fetchItems(): void {
    this.userService.getUsers().then(response => this.setItems(response));
  }
}
