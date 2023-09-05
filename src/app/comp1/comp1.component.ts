import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss'],
})
export class Comp1Component {
  loginForm = this.fb.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
  });
  isSubmitted = false;

  constructor(private fb: FormBuilder) {}
  //=============================================
  // Functions
  //=============================================

  onSubmitLogin(): void {
    if (this.isAllFieldsValid()) {
      console.log('Form was submitted', this.loginForm.value);
      console.log('The form invalid reaction is: ', this.loginForm.invalid);
      this.isSubmitted = true;
    } else {
      console.log('** WARNINIG ** Failed attempt to login.');
    }
  }

  isUsernameFieldValid(): boolean | undefined {
    const usernameProperty = this.loginForm.get('username');
    const result: boolean | undefined =
      usernameProperty?.invalid &&
      (usernameProperty?.dirty ||
        usernameProperty?.touched ||
        this.isSubmitted);
    return result;
  } //isUsernameFieldValid()

  isEmailFieldValid(): boolean | undefined {
    const emailProperty = this.loginForm.get('email');
    const result: boolean | undefined =
      emailProperty?.invalid &&
      (emailProperty?.dirty || emailProperty?.touched || this.isSubmitted);
    return result;
  } //isEmailFieldValid()

  isAllFieldsValid(): boolean | undefined {
    if (this.loginForm.value.email) {
      if (this.loginForm.value.username) {
        console.log(`Both fields are empty.`);
      } else {
        console.log(`Only email field has info.`);
      }
    } else {
      console.log(`Whatever.`);
    }

    return this.isUsernameFieldValid() && this.isEmailFieldValid();
  } //isAllFieldsValid
} //end comp1
