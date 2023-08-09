# Ng Exercises

Welcome to Speed Code Exercises
Starter version for assignment: card-20230804-1821

## Assignment title : Practice basic Observables RxJs

### Assignment Links
(1) Project starter:
  - GitHub link: https://github.com/SpeedCodeNpo/ng-exercises/tree/card-20230804-1821-q
  - Stackblitz link: 

(2) Project solution:
  - GitHub link: https://github.com/SpeedCodeNpo/ng-exercises/tree/card-20230804-1821-s
  - Stackblitz link: 

### Assignment goals :
- Practice using RxJs vanilla:
    - Create an Observable with :
      - Next , Complete & Error functions.
      - Synchronous Emissions.
      - Asynchronous Emissions.
      - Teardown function.
    - Then practice on subscription:
      - Subscribe with an Observer object
      - Unsubscribe using a setTimeout

## Interaction with app:
- The app will have a page displaying text info only, just explaining what is going on.
    - The text content is included in the starter branch for this assignment.
    - There is no input via the UI.
- The app output is to the DevTools console, so you need to open it to see the output console logs.
- The interaction is by editing values in the source code component class variables.

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

## An example console log of scenario where the unsubscribe timeout is 4 * asyncEmissionTimeMillisec :
===== ngOnInit : Creating a new Observable instance : myObservable$.
===== ngOnInit : BEFORE subscribing to myObservable$, creating variable mySubscription.
myObservable$: Executing the creation of myObservable$
Observer1: Value of the emission is "1"
===== ngOnInit : AFTER subscribing to myObservable$.
Observer1: Value of the emission is "2"
Observer1: Value of the emission is "3"
===== ngOnInit : Triggering unsubscribe from mySubscription.
myObservable$: Executing the teardown.
===== ngOnInit : AFTER Unsubscribed from mySubscription.
  
#### Screenshot of initial page before user interaction :
![image](https://github.com/SpeedCodeNpo/ng-exercises/assets/132397719/4f447580-dcc8-4a58-b47c-f75c3859bdd9)

## Included in the starter branch :
- A component named 'comp1' has already been created for you.
- It's template file already has the needed content.
- Since controlling the app behavior is via the source code, there is no interaction with the home page.
- Use 'comp1' as your assignment component, define the Observable in Comp1 component.