import { Component } from '@angular/core';
import {FormControl, FormsModule,FormGroup} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  template:``,
})
export class UserComponent {
  email = '';
  username = '';
  alertshow(){
    alert("HI "+this.username)
  }

  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });

  handleSubmit() {
    alert(this.profileForm.value.name + ' | ' + this.profileForm.value.email);
  }
}
