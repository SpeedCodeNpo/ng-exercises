# Ng Exercises

Welcome to Speed Code Exercises
Solution version for assignment: card-20230817-1642

## Assignment title : Practice RxJs Subject and BehaviorSubject

### Assignment Links

(1) Project starter:

- GitHub link: https://github.com/SpeedCodeNpo/ng-exercises/tree/card-20230817-1642-q
- Stackblitz link:

(2) Project solution:

- GitHub link: https://github.com/SpeedCodeNpo/ng-exercises/tree/card-20230817-1642-s
- Stackblitz link:

### Assignment goals :

- Practice RxJs http operator
  - Subject : Creates a Subject Observable to multicast simultaneously to all of it's observers / subscribers.
  - BehaviorSubject : Similar to Subject, the only difference is that the subscriber immediatly gets the last value emitted.

## App display:

- The app displays 
  #### Screenshot of initial page before user interaction :
  ![image](https://github.com/SpeedCodeNpo/ng-exercises/assets/132397719/8695af42-4a2d-412f-8e54-b3842446b72f)


## Interaction with app:

### The Subject / BehaviorSubject section :

-

#### Screenshot of page after clicking "Get User" button :
![image](https://github.com/SpeedCodeNpo/ng-exercises/assets/132397719/0af1b238-2681-484a-bf0a-47c7b82f644a)


### The section for controlling subscription-1 and 2 :

- Clicking on the "Subscribe" button will trigger the following actions:
  - An h3 tag appears displaying the value of the interval counter being emitted by the Subject / BehaviorSubject we subscribed to.
    - In case that you used 'Subject' as Observable then you will first see the default value 'UNSUBSCRIBED_START_VALUE' and then the newly emitted interval value appears.
    - In case that you used 'BehaviorSubject' as Observable then you will immediatly see the last interval value emitted by the 'BehaviorSubject' and then the newly emitted interval value will appear.
  - A "Unsubscribe" button appears.
    - When clicked it unsubscribes and resets the value of the subscribe counter to the default 'UNSUBSCRIBED_START_VALUE'.
    - In case you unsubscribed from the "Subject / BehaviorSubject" then nothing is emitted, if you try the "Activate Subscribe-1" button then the default counter value apears with a message explaining why the values displayed are what they are.
    #### Screenshot of page after clicking "Activate Subscribe-2" :
    ![image](https://github.com/SpeedCodeNpo/ng-exercises/assets/132397719/c7b44905-cd79-4f2a-8aab-26413ce78750)

## Included in the starter branch :

- A component named 'comp1' has already been created for you.
- It's template file already has the needed content.
- The typescript class component file has class variables & empty functions to support the template html file from not crashing.
