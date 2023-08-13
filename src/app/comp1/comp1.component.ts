import { Component } from '@angular/core';
import { Observable, Subscription, from, fromEvent, of } from 'rxjs';

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
  // Setting values for the "fromEvent" Observable
  //----------------------------------------
  isSubscribedToEvent = false;
  myFromEventSubscription = new Subscription();

  //=============================================
  // Functions
  //=============================================

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
    const myEventButton = document.querySelector('#trigger');

    if (myEventButton) {
      const myFromEventObservable$ = fromEvent(myEventButton, 'click');
      if (!this.isSubscribedToEvent) {
        console.log('Before subscribing to the "fromEvent" Observable');
        this.myFromEventSubscription = myFromEventObservable$.subscribe(
          (event) => console.log('Button clicked!')
        );
        this.isSubscribedToEvent = true;
        console.log('AFTER subscribing to the "fromEvent" Observable');
      } else {
        console.log('Already subscribed to fromEvent Observable.');
      } //if isSubscribedToEvent
    } else {
      console.log('this.myEventButton is false');
    } //if this.myEventButton
  } //onClickFromEvent

  onClickUnsubscribeFromEvent() {
    if (this.isSubscribedToEvent) {
      this.myFromEventSubscription.unsubscribe();
      this.isSubscribedToEvent = false;
      console.log('Unsubscribed from the "fromEvent" Observable');
    } else {
      console.log('Nothing to unsubscribe.');
    }
  } //onClickUnsubscribeFromEvent

  ngOnInit() {}
}
