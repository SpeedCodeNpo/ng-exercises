# Ng Exercises

Welcome to Speed Code Exercises
Starter version for assignment: card-20230812-2135

## Assignment title : Practice RxJs Creation Operators

### Assignment Links
(1) Project starter:
  - GitHub link: https://github.com/SpeedCodeNpo/ng-exercises/tree/card-20230812-2135-q
  - Stackblitz link: 

(2) Project solution:
  - GitHub link: https://github.com/SpeedCodeNpo/ng-exercises/tree/card-20230812-2135-s
  - Stackblitz link: 

### Assignment goals :
- Practice these RxJs creation operators:
    - for : Emmits all arguments of the 'of' operator, then completes.
    - from : Emitted values are items in an array, a Promise, Iterable or Class.
    - fromEvent : Creates an Observable from various event sources.

## Premade code in starter branch
- The starter branch has pre-made code so you can focus your practice on the relavent skills.
- The included code :
  - The styles.scss file already has the styles needed for the app.
    - A component named 'comp1' has been created with some default content in these files:
    - html : The html templated is populated with the text & has been linked where needed to variabls in the TS file.
    - comp1 component ts file :
      - It has class variables with default values and empty functions.

## Interaction with app:
- The app will have a page displaying 2 sections with general info and then 3 sections, each for a different creation operator.
- Here are the details of the 3 creation operator sections:
  - The 'of' operator: 
    - In this section you click the 'of' button to subscribe to an Observable created by the 'of' operator.
  - The output is displayed in the broser console.
  ------------------------------------------
  - The 'from' operator: 
    - In this section you click the 'from' button to subscribe to an Observable created by the 'from' operator.
    - The output is displayed in the broser console.
------------------------------------------
  - The 'fromEvent' operator: 
    - In this section you click the 'fromEvent' button to subscribe to an Observable created by 'fromEvent'.
    - The Observable listens to mouse button clicks.
    - Per each click a console log displays that a click was emitted.
    - This is a HOT observable, it will never end unless you unsubscribe.
    - Program the 'Unsubscribe' button to unsubscribe from this Observable.
    - After unsubscribing the button click will not respond.

================================================================

## App features:
- The 'of' button : Will only display the output in the console.log, no effects of button or anything else.
---
- The 'from' button : Will only display the output in the console.log, no effects of button or anything else.
---
- The 'fromEvent' button : 
  - By default only the 'fromEvent' button will be enabled, the other two buttons are disabled.
  - When activated the other two buttons are enabled.
  - The blue button triggers a click event which is indicated in the browser custom log.
  - The unsubscribe button will disconnect the subscription.
 
  
#### Screenshot of initial page before user interaction :
