import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss'],
})
export class Comp1Component {
  myOfObservable$ = of(1, 2, 3);
  onClickOf() {
    // Subscribe to the of Observable
    console.log('Before subscribing to the of Observable');
    this.myOfObservable$.subscribe((value) => {
      console.log(`Value is ${value}`);
    });
    console.log('AFTER subscribing to the of Observable');
  }
}
