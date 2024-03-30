import { Component } from '@angular/core';
import { IUser } from './user';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {

  user: IUser = {
    name: "Vlad Tymo",
    email: "super@gmail.com",
    address: "Rivne, Ukraine",
    isAdmin: false
  }

  onClick() {
    this.user.isAdmin = !this.user.isAdmin;
  }
}


