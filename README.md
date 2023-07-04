## Ng Exercises
Welcome to Speed Code Exercises
Instruction version for assignment: card-202307-1743

### Practice goals :

- Practice Angular local storage module which includes:
  - Set a key : value
  - Get a key : value
  - Remove a key : value
  - Clear the storage
  - Encrypt / Decrypt using  Web Crypto Storage https://www.npmjs.com/package/@webcrypto/storage

## Links
- 
### GitHub project starter link:
   https://github.com/SpeedCodeNpo/ng-exercises/tree/card-202307-1743-q

- Stackblitz starter project link:
-
### GitHub project solution link:
   https://github.com/SpeedCodeNpo/ng-exercises/tree/card-202307-1743-s

- Stackblitz solution project link:

### Assignment title :
- Play with Angular signal

### Assignment spec :
- The UI is divided into sections that demonstrate all functinality of signals.
- There are 6 sections :
  - The first 3 sections focus on a signal named 'count()'. These sections are :
    - (1) Demo the GET functionality
    - (2) Demo the SET functionality :
        - Here the user has an input box to pick a new value and a button to activate SET.
    - (3) Demo the UPDATE functionality :
        - Here the user has a button that increments the existing value by 1.
  - The 4th section demonstrates the MUTATE functionality on an object :
    - (4) The object is a user-info object, the UI enables to change property values of the username and user age.
  - The 5th section demonstartes a 'computed' signal :
    - The computed signal is named tokens.
    - It is calculated as user age * the count() value.
    - So if any one of them changes then the tokens gets a new value automatically.
  - The 6th section demonstrates an 'effect' signal :
    - Two effect signals are to be defined in the component constructor.
    - Each one is a console.log, one for the 'count()' signal and the other for the tokens() computed-signal.


### Screenshot of page sections 1 - 3:
- This is how the page looks for first 3 sections before user interaction:
  - 
  
### Screenshot of page sections 4 - 6:
- This is how the page looks for the rest of the sections before user interaction:
  - 


### Assignment instructions :

- Create UI as shown in screen snapshots.
- Create a component for the page (dont use the app.component fr the page)
