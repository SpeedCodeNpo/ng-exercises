import { Component } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss'],
})
export class Comp2Component {
  ngOnDestroy() {
    console.log('=== === I am component-2, my ngOnDestroy() was triggered .');
  }
}
