# Ng Exercises

Welcome to Speed Code Exercises
Solution version for assignment: card-20230813-2241

## Assignment title : Practice RxJs Creation Operators

### Assignment Links
(1) Project starter:
  - GitHub link: https://github.com/SpeedCodeNpo/ng-exercises/tree/card-20230813-2241-q
  - Stackblitz link: 

(2) Project solution:
  - GitHub link: https://github.com/SpeedCodeNpo/ng-exercises/tree/card-20230813-2241-s
  - Stackblitz link: 

### Assignment goals :
- Practice these RxJs creation operators:
    - timer : Completes after set time.
    - interval : Never ends, emits recurringly every time inteval set.

## App display:
- The app displays 3 sections :
  - An info section, it's content is already included in the starter version.
  - A timer section, it activates an RxJs timer Observable subscription.
  - An interval section, it activates an RxJs interval Observable subscription.

## Interaction with app:
  - Clicking the "Start Timer" button 

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


#### Screenshot of initial page before user interaction :
![image](https://github.com/SpeedCodeNpo/ng-exercises/assets/132397719/8ced1406-3ede-4ab2-9c89-e845c6e22d37)


#### Screenshot of page after activating timer and interval :
![image](https://github.com/SpeedCodeNpo/ng-exercises/assets/132397719/32e9a037-4fcd-4e88-b34a-13cb42673819)


================================================================



## App features:
- The app creates an Observable whose actions are controlled by 3 global variables.
    - **asyncEmissionTimeMillisec** : Is the time interval for the first asynchronous emission.
    - **isNeverEnding**             : This boolean when true will disable the Observble from ending (complete & error)
                                       so the only way a subscription can disconnect is by unsubscribing.
    - **isActivateComplete**        : This boolean when true will stop the Observable from emitting by activating the 'complete'                          
                                      function otherwise it will activate the 'error' function.

- When subscribed to the Observable it will :
    - Emmit a synchronous value 
    - Then emiit 2 asynchronous values with time intervals :
        - The first time interval is equal to the value of 'asyncEmissionTimeMillisec'.
        - The second interval is triple that time ( 3 * asyncEmissionTimeMillisec).
    - In case isNeverEnding === false the Observable will emit either a 'complete' or 'error' depending 
         on value of 'isActivateComplete' (if it is true or false accordingly).
       - When a 'complete' or 'error' are emitted the Teardown function (the 'return' in the Observable) 
         will be activated (It just console logs a message).
    - But when isNeverEnding === true then the Observable will not emmit neither a 'complete' or an'error'
      this means that the subscription will stay alive until the unsubscribe is called.

- The subscription is activated with a setTimeout.
    - The value of the timeout is a multiplier of 'asyncEmissionTimeMillisec'.
    - So you can change the value to cause a subscription to end before the async emiisions are released
      or you can have the subscription end after the first one is released or after both are released.
    - This feature demonstrates the affect of the unsubscribe with async emissions.

