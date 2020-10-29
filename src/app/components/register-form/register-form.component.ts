import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgModel } from '@angular/forms';
import { IUser } from '../../common/user.model';
import { AuthService } from '../../services/auth.service';
// import { Router } from '@angular/router';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent {
  nickName: string;
  name: string;
  lastName: string;
  email: string;
  password: string;

  registerForm: FormGroup;

  registerInvalid = false;

  constructor(private authService: AuthService) {}

  signUp(formValues: IUser) {
    this.authService.signUpUser(formValues);

    /*  this.authService.signUpUser(user).subscribe((resp) => {
      if (!resp) {
        this.loginInvalid = true;
      } /* else {
        this.router.navigate(['']);
      } 
    });*/
  }
}
