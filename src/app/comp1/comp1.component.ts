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
    console.log('Form was submitted', this.loginForm.value);
    console.log('The form invalid reaction is: ', this.loginForm.invalid);
    this.isSubmitted = true;
  }
} //end comp1
