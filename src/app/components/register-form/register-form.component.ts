import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../../common/user.model';
import { AuthService } from '../../services/auth.service';
// import { Router } from '@angular/router';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup;

  nickName: FormControl;
  name: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.nickName = new FormControl('', Validators.required);
    this.name = new FormControl('', Validators.required);
    this.lastName = new FormControl('');
    this.email = new FormControl('', Validators.required);
    this.nickName = new FormControl('', Validators.required);
    this.password = new FormControl('', [
      Validators.required,
      Validators.pattern(
        '^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[@$!%*#?&]).{8,12}$'
      ),
    ]);

    this.registerForm = new FormGroup({
      nickName: this.nickName,
      name: this.name,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
    });
  }

  validateNickName() {
    return this.nickName.valid || this.nickName.untouched;
  }

  validateName() {
    return this.name.valid || this.name.untouched;
  }
  validateEmail() {
    return this.email.valid || this.email.untouched;
  }

  validatePassword() {
    return this.password.valid || this.password.untouched;
  }

  signUp(formValues: any) {
    let user: IUser = {
      nickName: formValues.nickName,
      name: formValues.name,
      lastName: formValues.lastName,
      email: formValues.email,
      password: formValues.password,
    };
    console.log('this is user here', user);

    // this.authService.signUpUser(formValues);

    /*  this.authService.signUpUser(user).subscribe((resp) => {
      if (!resp) {
        this.loginInvalid = true;
      } /* else {
        this.router.navigate(['']);
      } 
    });*/
  }
}
