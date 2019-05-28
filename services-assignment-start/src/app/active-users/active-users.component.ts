import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
  providers: []
})
export class ActiveUsersComponent implements OnInit {
  @Input() users: string[];

  constructor(private usersService: UsersService) {}

  onSetToInactive(id: number) {
    this.usersService.onSetToInactive(id);
  }

  ngOnInit() {
    this.users = this.usersService.activeUsers;
  }
}
