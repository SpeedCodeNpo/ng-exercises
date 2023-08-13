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
