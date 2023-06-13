import { Component } from '@angular/core';

@Component({
  selector: 'app-attrib-page',
  templateUrl: './attrib-page.component.html',
  styleUrls: ['./attrib-page.component.scss'],
})
export class AttribPageComponent {
  defaultAlignment = 'left';
  alignRequested = this.defaultAlignment;

  onClickAlign(alignValue: string) {
    if (alignValue !== 'left' || 'center' || 'right' || 'justify') {
      this.alignRequested = this.defaultAlignment;
    }
    this.alignRequested = alignValue;
  }
}
