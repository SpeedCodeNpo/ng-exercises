import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
})
export class FirstComponent {
  isBtnStyle = false;
  isRed = false;
  isGreen = false;
  isBlue = false;
  //isBtnTwo = false;

  clickBtnOne() {
    this.isBtnStyle = !this.isBtnStyle;
  }

  toggleRed() {
    this.isRed = !this.isRed;
    this.isGreen = false;
    this.isBlue = false;
  }

  toggleGreen() {
    this.isRed = false;
    this.isGreen = !this.isGreen;
    this.isBlue = false;
  }

  toggleBlue() {
    this.isRed = false;
    this.isGreen = false;
    this.isBlue = !this.isBlue;
  }

  resetColor() {
    this.isRed = false;
    this.isGreen = false;
    this.isBlue = false;
  }

  // clickBtnTwo() {
  //   this.isBtnTwo = true;
  // }
}
