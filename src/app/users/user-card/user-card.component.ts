import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../user';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {

  @Output() deleteEvent = new EventEmitter<number>();

  @Input()
  user: IUser = {
    id: 0,
    name: "",
    email: "",
    address: "",
    isAdmin: false
  }

  onClick() {
    this.user.isAdmin = !this.user.isAdmin;
  }

  onDelete() {
    this.deleteEvent.emit(this.user.id);
  }
}


