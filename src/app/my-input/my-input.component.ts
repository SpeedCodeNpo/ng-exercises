import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-input',
  templateUrl: './my-input.component.html',
  styleUrls: ['./my-input.component.scss'],
})
export class MyInputComponent {
  inputContent = 'Hello';

  reactToKeyPress(event: Event): void {
    this.inputContent = (event.target as HTMLInputElement).value;
  }
}
