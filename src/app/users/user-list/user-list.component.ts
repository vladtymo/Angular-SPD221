import { Component } from '@angular/core';
import { UserCardComponent } from "../user-card/user-card.component";
import { IUser } from '../user';
import { USERS } from '../user-mock';
import { CreateUserComponent } from "../create-user/create-user.component";

@Component({
  selector: 'app-user-list',
  standalone: true,
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
  imports: [UserCardComponent, CreateUserComponent]
})
export class UserListComponent {
  users: IUser[] = [...USERS];

  clear() {
    this.users = [];

  }
  load() {
    this.users = [...USERS];
  }

  deleteUser(id: number) {
    let index = this.users.findIndex(x => x.id == id);
    this.users.splice(index, 1);
  }

  createUser(user: IUser) {
    this.users.push(user);
  }
}
