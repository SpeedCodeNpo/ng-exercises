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
      this.isSubmitted = false;
    }
  }

  isUsernameError(): boolean | undefined {
    const usernameProperty = this.loginForm.get('username');
    const result: boolean | undefined =
      usernameProperty?.invalid &&
      (usernameProperty?.dirty ||
        usernameProperty?.touched ||
        this.isSubmitted);
    return Boolean(result);
  } //isUsernameFieldValid()

  isEmailError(): boolean | undefined {
    const emailProperty = this.loginForm.get('email');
    const result: boolean | undefined =
      emailProperty?.invalid &&
      (emailProperty?.dirty || emailProperty?.touched || this.isSubmitted);
    return result;
  } //isEmailFieldValid()

  isAllFieldsValid(): boolean | undefined {
    const usernameFieldValue = this.loginForm.value.username;
    const emailFieldValue = this.loginForm.value.email;
    var result = false;
    if (
      Boolean(
        usernameFieldValue &&
          emailFieldValue &&
          !this.isUsernameError() &&
          !this.isEmailError()
      )
    ) {
      console.log(`Both username and email are valid.`);
      result = true;
    } else {
      console.log(`Either username and/or email are invalid.`);
      this.isSubmitted = false;
      result = false;
    }
    return Boolean(result);
  } //isAllFieldsValid
} //end comp1
