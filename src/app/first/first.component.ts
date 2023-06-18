import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
})
export class FirstComponent {
  myClassString = 'my-default-style';
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

  resetStyle() {
    this.myClassString = 'my-default-style';
  }

  updateMyClassString() {
    this.myClassString =
      this.currentColor + ' ' + this.currentFont + ' ' + this.currentBorder;
  }
}
