import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss'],
})
export class Comp1Component {
  myUsername?: string;
  myEmail?: string ;
  isSubmitted = false;

  constructor(private fb: FormBuilder) {}
  //=============================================
  // Functions
  //=============================================

  onSubmitLogin(loginForm: any): void {
    if (loginForm.valid) {
      console.log('Form was submitted', loginForm.value);
      this.isSubmitted = true;
    } else {
      console.log('** WARNINIG ** Failed attempt to login.');
      this.isSubmitted = false;
    }
  }
} //end comp1
