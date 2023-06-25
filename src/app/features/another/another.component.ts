import { Component } from '@angular/core';

@Component({
  selector: 'app-another',
  templateUrl: './another.component.html',
  styleUrls: ['./another.component.scss'],
})
export class AnotherComponent {
  ngOnDestroy() {
    console.log('=== === I am component-2, my ngOnDestroy() was triggered .');
  }
}
