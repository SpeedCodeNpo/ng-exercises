import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss'],
})
export class Comp1Component {
  loginForm = this.fb.group({
    username: '',
    email: '',
  });
  isLoginActive = true;

  constructor(private fb: FormBuilder) {}
  //=============================================
  // Functions
  //=============================================

  /**
   * Function to get user data
   */
  onSubmitLogin(): void {
    console.log('Form was submitted', this.loginForm.value);
  }
} //end comp1
