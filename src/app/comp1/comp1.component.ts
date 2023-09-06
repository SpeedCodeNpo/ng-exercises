import { Component } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss'],
})
export class Comp1Component {
  isSubmitted = false;
  constructor() {}

  //=============================================
  // Functions
  //=============================================

  onSubmitLogin(): void {}

  isUsernameError(): boolean | undefined {
    return false;
  } //isUsernameFieldValid()

  isEmailError(): boolean | undefined {
    return false;
  } //isEmailFieldValid()

  isAllFieldsValid(): boolean | undefined {
    return true;
  } //isAllFieldsValid

} //end comp1
