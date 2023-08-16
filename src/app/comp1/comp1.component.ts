import { Component } from '@angular/core';
import { Subject, Subscriber, Subscription, from, interval } from 'rxjs';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss'],
})
export class Comp1Component {
  //----------------------------------------
  // Setting values for the "Subject" Observable
  //----------------------------------------
  // emitedData = [1,2,3,4,5,6];
  // emittingObservable$ = from(this.emitedData);
  mySubject$ = new Subject();
  intervalEmiter$ = interval(2000); //milisecs
  intervalEmiterSubscribe$ = this.intervalEmiter$.subscribe(
    (intervalCount: number) => {
      this.mySubject$.next(intervalCount);
    }
  );

  mySubscribe1 = new Subscription();
  isSubscribe1Active = false;
  isSubscribe2Active = false;
  subscribe1Value = 0;
  subscribe2Value = 0;

  //-----------
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

  onClickSubscribe1() {
    this.isSubscribe1Active = true;
    this.mySubscribe1 = this.mySubject$.subscribe((value) => {
      this.subscribe1Value = value as number;
    });
  } // onClickSubscribe1

  onClickUnsubscribe1() {
    this.isSubscribe1Active = false;
    this.mySubscribe1.unsubscribe();
  } // onClickSubscribe1

  onClickSubscribe2() {
    this.isSubscribe2Active = true;
    const mySubscribe1 = this.mySubject$.subscribe((value) => {
      this.subscribe2Value = value as number;
    });
  } // onClickSubscribe2
  //----------------------------------------
  // Defining the function for clicking on "Set Timer" button
  //----------------------------------------
  onClickSetInterval() {} //onClickSetInterval
} //end comp1
