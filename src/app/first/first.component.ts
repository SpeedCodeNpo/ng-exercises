import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
})
export class FirstComponent {
  customClassString = '';
  isDefaultLocked = false;

  currentColor = 'black';
  currentFont = 'medium';
  currentBorder = 'no-border';

  myRedColor = 'red';

  pickColor(colorPicked: string) {
    this.currentColor = colorPicked;
    this.updateMyClassString();
  }

  pickFont(fontPicked: string) {
    this.currentFont = fontPicked;
    this.updateMyClassString();
  }

  pickBorder(borderPicked: string) {
    this.currentBorder = borderPicked;
    this.updateMyClassString();
  }

  updateMyClassString() {
    this.customClassString =
      this.currentColor + ' ' + this.currentFont + ' ' + this.currentBorder;
  }
}
