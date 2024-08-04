import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersListService } from '../../common/services/users-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  constructor(private usersListService: UsersListService,
    private router: Router
  ) {

  }

  username: string = '';
  password: string = '';
  minUsernameLength = 2;
  minPasswordLength = 2;

  form: FormGroup = new FormGroup({
    username: new FormControl(this.username, [
      Validators.required,
      Validators.minLength(this.minUsernameLength)
    ]),
    password: new FormControl(this.password, [
      Validators.required,
      Validators.minLength(this.minPasswordLength),
      Validators.nullValidator
    ]),
  });

  usernameError: string = "";
  passwordError: string = "";
  loginError: string = "";

  onSubmit() {
    this.loginError = "";
    if (this.form.invalid) {
      this.setError();
      return;
    } 

    this.usernameError= "";
    this.passwordError = "";
    this.username = this.form.value['username'];
    this.password = this.form.value['password'];
    let id = this.usersListService.login(this.username, this.password);

    if (id===-1) {
      this.loginError = "Username is not valid!!";
      return;
    } else if (id===-2) {
      this.loginError = "Incorrect password!!";
      return;
    }

    console.log("Login successful");
    this.router.navigate(['/user']);
  }

  setError() {
    const controls = this.form.controls;

    console.log(controls)

    if (controls['username'].errors) {
      if (controls['username'].errors['required']) {
        this.usernameError = "Username is required";
      } else if (controls['username'].errors['minlength']) {
        this.usernameError = "Username should be minimum " + this.minUsernameLength + " characters";
      } else {
        this.usernameError = "Username not valid";
      }
    } 
    
    if (controls['password'].errors) {
      if (controls['password'].errors['required']) {
        this.passwordError = "Password is required";
      } else if (controls['password'].errors['minlength']) {
        this.passwordError = "Password should be minimum " + this.minPasswordLength + " characters";
      } else {
        this.passwordError = "Password  not valid";
      }
    }
  }
}
