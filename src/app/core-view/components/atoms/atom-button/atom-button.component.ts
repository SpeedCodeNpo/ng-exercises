import { Component, Input } from '@angular/core';

@Component({
  selector: 'atom-button',
  templateUrl: './atom-button.component.html',
  styleUrls: ['./atom-button.component.scss'],
})
export class AtomButtonComponent {
  @Input() text = 'Button';
}
