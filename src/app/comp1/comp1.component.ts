import { Component } from '@angular/core';

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

  onClickSetTimer() {} // onClickSetTimer

  //----------------------------------------
  // Defining the function for clicking on "Set Timer" button
  //----------------------------------------
  onClickSetInterval() {} //onClickSetInterval
} //end comp1
