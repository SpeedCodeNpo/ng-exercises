import { Component } from '@angular/core';
import {
  BehaviorSubject,
  Subject,
  Subscriber,
  Subscription,
  from,
  interval,
} from 'rxjs';

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
  mySubject$ = new BehaviorSubject(33);
  intervalEmiter$ = interval(2000); //milisecs
  intervalEmiterSubscribe$ = this.intervalEmiter$.subscribe(
    (intervalCount: number) => {
      this.mySubject$.next(intervalCount);
      this.subjectValue = intervalCount;
    }
  );

  subjectValue = 0;
  isSubjectActive = true; //Subject is activated automatically
  //---
  mySubscribe1 = new Subscription();
  isSubscribe1Active = false;

  mySubscribe2 = new Subscription();
  isSubscribe2Active = false;

  UNSUBSCRIBED_START_VALUE = -1010; //Value to identify a counter in state of unsubscribed
  subscribe1Value = this.UNSUBSCRIBED_START_VALUE;
  subscribe2Value = this.UNSUBSCRIBED_START_VALUE;

  //=============================================
  // Functions
  //=============================================

  //----------------------------------------
  // Defining the function for clicking on "Set Timer" button
  //----------------------------------------

  onClickSubjectUnsubscribe() {
    this.intervalEmiterSubscribe$.unsubscribe();
    this.isSubjectActive = false;
  }

  onClickSubscribe1() {
    this.isSubscribe1Active = true;
    this.mySubscribe1 = this.mySubject$.subscribe((value) => {
      this.subscribe1Value = value as number;
      console.log('Subscribe-1 counter : ', value);
    });
  } // onClickSubscribe1

  onClickUnsubscribe1() {
    this.isSubscribe1Active = false;
    this.mySubscribe1.unsubscribe();
    this.subscribe1Value = this.UNSUBSCRIBED_START_VALUE;
  } // onClickSubscribe1

  onClickSubscribe2() {
    this.isSubscribe2Active = true;
    this.mySubscribe2 = this.mySubject$.subscribe((value) => {
      this.subscribe2Value = value as number;
      console.log('Subscribe-2 counter : ', value);
    });
  } // onClickSubscribe2

  onClickUnsubscribe2() {
    this.isSubscribe2Active = false;
    this.mySubscribe2.unsubscribe();
    this.subscribe2Value = this.UNSUBSCRIBED_START_VALUE;
  } // onClickSubscribe1
  //----------------------------------------
  // Defining the function for clicking on "Set Timer" button
  //----------------------------------------
  onClickSetInterval() {} //onClickSetInterval
} //end comp1
