import { Component } from '@angular/core';
import { Subscription, from, of } from 'rxjs';

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
  // Defining the function for clicking on the "of" button
  //----------------------------------------
  onClickOf() {} //onClickOf

  //----------------------------------------
  // Defining the function for clicking on the "from" button
  //----------------------------------------
  onClickFrom() {} //onClickFrom

  //----------------------------------------
  // Defining the function for clicking on the "from" button
  //----------------------------------------
  onClickFromEvent() {} //onClickFromEvent

  onClickUnsubscribeFromEvent() {} //onClickUnsubscribeFromEvent
}
