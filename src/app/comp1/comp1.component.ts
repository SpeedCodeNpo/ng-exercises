import { Component } from '@angular/core';
import {
  Observable,
  Subscription,
  from,
  fromEvent,
  interval,
  of,
  timer,
} from 'rxjs';

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

  //----------------------------------------
  // Setting values for the "timer" Observable
  //----------------------------------------
  timerLengthMilisec = 5000;
  isTimerActive = false;

  //----------------------------------------
  // Setting values for the "interval" Observable
  //----------------------------------------
  intervalTimeMilisec = 1000;
  intervalCounter = 0;
  isIntervalActive = false;

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

  //----------------------------------------
  // Defining the function for clicking on "Set Timer" button
  //----------------------------------------
  onClickSetTimer() {
    if (!this.isTimerActive) {
      this.isTimerActive = true;
      console.log(
        `Started counter, wait ${this.timerLengthMilisec / 1000} seconds ...`
      );
      const myTimerObservable$ = timer(this.timerLengthMilisec);
      myTimerObservable$.subscribe({
        complete: () => {
          console.log('Completed !');
          this.isTimerActive = false;
        },
      });
    }
  } // onClickSetTimer

  //----------------------------------------
  // Defining the function for clicking on "Set Timer" button
  //----------------------------------------
  onClickSetInterval() {
    let myIntervalSubscription = new Subscription();
    if (!this.isIntervalActive) {
      this.isIntervalActive = true;
      const myIntervalObservable$ = interval(this.intervalTimeMilisec);
      myIntervalSubscription = myIntervalObservable$.subscribe({
        next: () => {
          console.log(`interval counter = ${this.intervalCounter}`);
          this.intervalCounter++;
          if (this.intervalCounter > this.timerLengthMilisec / 1000) {
            this.isIntervalActive = false;
            myIntervalSubscription.unsubscribe();
          } //if this.intervalCounter > limit
        },
      });
    } //if isIntervalActive
  } //onClickSetInterval
} //end comp1
