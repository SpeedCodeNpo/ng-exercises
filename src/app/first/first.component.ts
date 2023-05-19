import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
})
export class FirstComponent {
  isMyCustomClass = false;
  boxSize = 50;

  clickChangeClass() {
    this.isMyCustomClass = !this.isMyCustomClass;
  }

  increaseSize() {
    this.boxSize += 10;
  }

  decreaseSize() {
    this.boxSize -= 10;
  }
}
