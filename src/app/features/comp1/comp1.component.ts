import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss'],
})
export class Comp1Component {
  count = signal<number>(0);

  updateCount() {
    this.count.set(4);
  }

  incrementCount() {
    this.count.update((value) => {
      value++;
      return value;
    });
  }
}
