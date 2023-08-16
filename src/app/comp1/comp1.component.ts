import { Component } from '@angular/core';
import {
  BehaviorSubject,
  Subject,
  Subscriber,
  Subscription,
  interval,
} from 'rxjs';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss'],
})
export class Comp1Component {
  //----------------------------------------
  // Setting values for the "Subject"or "BehaviorSubject" Observable
  //----------------------------------------

  //++++++++++
  //+++ To demo the BehaviorSubject uncomment below
  //++++++++++
  //mySubject$ = new BehaviorSubject(33); // Argument is arbitrary & not used.

  //++++++++++
  //+++ To demo the Subject uncomment below
  //++++++++++
  mySubject$ = new Subject();

  // Class variables
  intervalEmiter$ = interval(2000); //milisecs

  intervalEmiterSubscribe$ = this.intervalEmiter$.subscribe(
    (intervalCount: number) => {
      this.mySubject$.next(intervalCount);
      this.subjectValue = intervalCount;
    }
  );

  subjectValue = 0;
  isSubjectActive = true; //Subject is activated automatically

  //Value to identify a counter in state of unsubscribed
  UNSUBSCRIBED_START_VALUE = -1010; 

  // Class variables for subscription-1
  mySubscribe1 = new Subscription();
  isSubscribe1Active = false;
  subscribe1Value = this.UNSUBSCRIBED_START_VALUE;

  // Class variables for subscription-2
  mySubscribe2 = new Subscription();
  isSubscribe2Active = false;
  subscribe2Value = this.UNSUBSCRIBED_START_VALUE;

  //=============================================
  // Functions
  //=============================================

  /**
   * Function to unsubscribe from the Subject or BehaviorSubject
   */
  onClickSubjectUnsubscribe() {
    this.intervalEmiterSubscribe$.unsubscribe();
    this.isSubjectActive = false;
  }

  /**
   * Function of first subscription to Subject or BehaviorSubject
   */
  onClickSubscribe1() {
    this.isSubscribe1Active = true;
    this.mySubscribe1 = this.mySubject$.subscribe((value) => {
      this.subscribe1Value = value as number;
      console.log('Subscribe-1 counter : ', value);
    });
  } // onClickSubscribe1

   /**
   * Function unsubscribe from first subscription
   */
  onClickUnsubscribe1() {
    this.isSubscribe1Active = false;
    this.mySubscribe1.unsubscribe();
    this.subscribe1Value = this.UNSUBSCRIBED_START_VALUE;
  } // onClickSubscribe1

   /**
   * Function of second subscription to Subject or BehaviorSubject
   */
  onClickSubscribe2() {
    this.isSubscribe2Active = true;
    this.mySubscribe2 = this.mySubject$.subscribe((value) => {
      this.subscribe2Value = value as number;
      console.log('Subscribe-2 counter : ', value);
    });
  } // onClickSubscribe2

   /**
   * Function unsubscribe from second subscription
   */
  onClickUnsubscribe2() {
    this.isSubscribe2Active = false;
    this.mySubscribe2.unsubscribe();
    this.subscribe2Value = this.UNSUBSCRIBED_START_VALUE;
  } // onClickSubscribe1

} //end comp1
