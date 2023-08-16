# Ng Exercises

Welcome to Speed Code Exercises
Solution version for assignment: card-20230815-2153

## Assignment title : Practice RxJs Subject and BehaviorSubject

### Assignment Links
(1) Project starter:
  - GitHub link: https://github.com/SpeedCodeNpo/ng-exercises/tree/card-20230815-2153-q
  - Stackblitz link: 

(2) Project solution:
  - GitHub link: https://github.com/SpeedCodeNpo/ng-exercises/tree/card-20230815-2153-s
  - Stackblitz link: 

### Assignment goals :
- Practice these RxJs creation operators:
    - Subject : Creates a Subject Observable to multicast simultaneously to all of it's observers / subscribers.
    - BehaviorSubject : Similar to Subject, the only difference is that the subscriber immediatly gets the last value emitted.

## App display:
- The app displays 4 sections :
  - An info section, it's content is already included in the starter version.
  - A Subject / BehaviorSubject section.
  - A section for controlling subscription-1.
  - A section for controlling subscription-2.

#### Screenshot of initial page before user interaction :

## Interaction with app:
  - Clicking the "Start Timer" button will display an 'h3' message 
      - The message is :  "Started, will complete in x seconds"
      - x i the value of the timer time.
      - When the timer completes the message is hidden.

  - Clicking the "interval x seconds" : 
      - The value of 'x' in the button text is the interval time.
      - When clicked an 'h3' message is displayed with this message :
        - "Current count is : x will end after y seconds."
        - 'x' is the value of the counter.
        - 'y' is the same value used by the timer in section 2.
      - When the timer completes the message is hidden and the counter resets.


## Included in the starter branch :
- A component named 'comp1' has already been created for you.
- It's template file already has the needed content.
- The typescript class component file has these presets: 
  - For the timer demo section these class properties: 
    - timerLengthMilisec : Defines the timer length in millisec.
    - isTimerActive : Flags state of timer

  - For the interval demo section these class properties: 
    - intervalTimeMilisec : The pause time between each interval emittion
    - intervalCounter : Starting value of the counter
    - isIntervalActive : Flags state of timer

  - The component class file also includes two empty functions :
    - onClickSetTimer()
    - onClickSetInterval()


#### Screenshot of page after activating timer and interval :
![image](https://github.com/SpeedCodeNpo/ng-exercises/assets/132397719/32e9a037-4fcd-4e88-b34a-13cb42673819)

