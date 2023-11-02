import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  reactiveForm!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.reactiveForm = this.fb.group({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }
  x!: any;
  handleUserDetails() {
    this.x = localStorage.getItem('users');
    if (this.x != null) {
      this.x = JSON.parse(this.x);
    }
    this.x = {
      email: this.reactiveForm.value.email,
      password: this.reactiveForm.value.password,
    };
    localStorage.setItem('users', JSON.stringify(this.x));
    console.log(localStorage.getItem('users'));
  }
}
