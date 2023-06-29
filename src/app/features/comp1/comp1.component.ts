import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss'],
})
export class Comp1Component {
  initialCount = 0;
  count = signal<number>(this.initialCount);

  consoleLogCount() {
    console.log(`The signal 'count' value is : ${this.count()}`);
  }

  resetCount() {
    this.count.set(this.initialCount);
  }

  incrementCount() {
    this.count.update((value) => {
      value++;
      return value;
    });
  }
}
