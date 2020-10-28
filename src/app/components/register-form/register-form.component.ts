import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgModel } from '@angular/forms';
import { IUser } from '../../common/user.model';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup;

  user: IUser;

  constructor() {}

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgModel) {
    if (form != null) {
      form.reset();
      this.user = {
        userName: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      };
    }
  }
}
