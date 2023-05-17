import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
})
export class FirstComponent {
  isBtnOne = false;
  isBtnTwo = false;

  clickBtnOne() {
    this.isBtnOne = true;
  }

  clickBtnTwo() {
    this.isBtnTwo = true;
  }
}
