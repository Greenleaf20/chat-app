import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.css'
})
export class SignupFormComponent {
  username: string = '';
  password: string = '';
  firstname: string = '';
  lastname: string = '';
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
    firstname: new FormControl(this.firstname, [
      Validators.required
    ]),
    lastname: new FormControl(this.lastname, [
      Validators.required
    ]),
  });

  usernameError: string = "";
  passwordError: string = "";
  firstnameError: string = "";
  lastnameError: string = "";

  onSubmit() {
    if (this.form.invalid) {
      this.setError();
      return;
    } 

    this.usernameError= "";
    this.passwordError = "";
    this.firstnameError = "";
    this.lastnameError = "";
    this.username = this.form.value['username'];
    this.password = this.form.value['password'];
    this.firstname = this.form.value['firstname'];
    this.lastname = this.form.value['lastname'];
    console.log("Form submitted with", this.username, this.password, this.firstname, this.lastname);
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

    if (controls['firstname'].errors) {
      if (controls['firstname'].errors['required']) {
        this.firstnameError = "First name is required";
      } 
    }

    if (controls['lastname'].errors) {
      if (controls['lastname'].errors['required']) {
        this.lastnameError = "Last name is required";
      } 
    }
  }
}
