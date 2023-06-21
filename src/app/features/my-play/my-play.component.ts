import { Component } from '@angular/core';

@Component({
  selector: 'app-my-play',
  templateUrl: './my-play.component.html',
  styleUrls: ['./my-play.component.scss'],
})
export class MyPlayComponent {
  highlightColor = 'lightblue';
  highlightFontStyle = 'inherit';

  inputHighlightColor(inputColor: string) {
    console.log('Inside the input function');
    this.highlightColor = inputColor;
  }
}
