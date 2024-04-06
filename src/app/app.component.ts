import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserCardComponent } from "./users/user-card/user-card.component";
import { UserListComponent } from "./users/user-list/user-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, UserCardComponent, UserListComponent]
})
export class AppComponent {
  title = 'ToDoListApp';
}
