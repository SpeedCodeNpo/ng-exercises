import { Component } from '@angular/core';
import { from, fromEvent, of } from 'rxjs';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss'],
})
export class Comp1Component {
  //----------------------------------------
  // Setting values for the "of" Observable
  //----------------------------------------
  myOfObservable$ = of(1, 2.3256, 'Hello', ['a', 'b'], {
    prop1: 'value1',
    prop2: 'value2',
  });

  //----------------------------------------
  // Setting values for the "from" Observable
  //----------------------------------------
  myFromObservable$ = from(['One', 'Two', 'Three']);

  //----------------------------------------
  // Setting values for the "from" Observable
  //----------------------------------------
  // triggerButton = document.querySelector('button#trigger');
  // myFromEventObservable$ = fromEvent<MouseEvent>(this.triggerButton, 'click');

  //----------------------------------------
  // Defining the function for clicking on the "of" button
  //----------------------------------------
  onClickOf() {
    // Subscribe to the of Observable
    console.log('Before subscribing to the of Observable');
    this.myOfObservable$.subscribe((value) => {
      console.log(`"Of" value is ${value}`);
    });
    console.log('AFTER subscribing to the of Observable');
  }

  //----------------------------------------
  // Defining the function for clicking on the "from" button
  //----------------------------------------
  onClickFrom() {
    // Subscribe to the 'from' Observable
    console.log('Before subscribing to the "from" Observable');
    this.myFromObservable$.subscribe((value) => {
      console.log(`"From" value is ${value}`);
    }); //subscribe

    console.log('AFTER subscribing to the "from" Observable');
  }

  //----------------------------------------
  // Defining the function for clicking on the "from" button
  //----------------------------------------
  onClickFromEvent() {
    // Subscribe to the 'fromEvent' Observable (HOT Observable)
    console.log('Before subscribing to the "fromEvent" Observable');

    console.log('AFTER subscribing to the "fromEvent" Observable');

    // Unsubscribed from the 'fromEvent' Observable
    // We must unsubscribe because it is a HOT Observable that never completes by itself.
  }

  ngOnInit() {
    const button = document.querySelector('#myButton');
    if (button) {
      const observable = fromEvent(button, 'click');
      observable.subscribe((event) => console.log('Button clicked!'));
    }
  }
}
