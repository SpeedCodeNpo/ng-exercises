import { Component } from '@angular/core';

@Component({
  selector: 'app-prop-page',
  templateUrl: './prop-page.component.html',
  styleUrls: ['./prop-page.component.scss'],
})
export class PropPageComponent {
  headerTextContent = 'This is the default text for the h1 header';
  classNamePicked = '';

  onInputHeaderText(inputString: string) {
    this.headerTextContent = inputString;
  }

  onClickClass(classClicked: string) {
      this.classNamePicked = classClicked;

  }
}
