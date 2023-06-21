import { Component } from '@angular/core';

@Component({
  selector: 'app-my-play',
  templateUrl: './my-play.component.html',
  styleUrls: ['./my-play.component.scss'],
})
export class MyPlayComponent {
  highlightColor = 'yellow';
  highlightFontStyle = 'normal';

  inputHighlightColor(inputColor: string) {
    this.highlightColor = inputColor;
  }

  pickHighlightFontStyle(inputFontStyle: string) {
    this.highlightFontStyle = inputFontStyle;
  }
}
