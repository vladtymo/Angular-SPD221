import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { IUser } from '../user';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {

  @Output() createEvent = new EventEmitter<IUser>();

  // form group
  createForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    address: [''],
    isAdmin: [false]
  });

  constructor(private fb: FormBuilder) {

  }

  onSubmit() {
    if (!this.createForm.valid) {
      alert("Invalid data!");
      return;
    }

    const user = this.createForm.value as IUser;
    console.log(user);

    // send user to parent component
    this.createEvent.emit(user);
  }
}
