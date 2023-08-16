import { Component } from '@angular/core';
import { Subject, from, interval } from 'rxjs';

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
  intervalEmiter$ = interval(1000); //every 1 second
  intervalEmiterSubscribe$ = this.intervalEmiter$.subscribe((intervalCount) => {
    this.mySubject$.next(intervalCount);
  });

  isSubscribe1Active = false;

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
    const mySubscribe1 = this.mySubject$.subscribe((value) => {
      console.log('Counter :', value);
    });
  } // onClickSetTimer

  //----------------------------------------
  // Defining the function for clicking on "Set Timer" button
  //----------------------------------------
  onClickSetInterval() {} //onClickSetInterval
} //end comp1
