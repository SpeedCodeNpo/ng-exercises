## Ng Exercises
Welcome to Speed Code Exercises
Solution version for assignment: card-20230626-1039

### Practice goals :

- Practice Angular signals which includes:
  - signal initialize a value
  - signal get it's value
  - signal set a new value
  - signal update to new value from existing value
  - create a computed signal
  - create an async effect signal

## Links
- 
### GitHub project starter link:
   https://github.com/SpeedCodeNpo/ng-exercises/tree/card-20230626-1039-q

- Stackblitz starter project link:
-
### GitHub project solution link:
   https://github.com/SpeedCodeNpo/ng-exercises/tree/card-20230626-1039-s

- Stackblitz solution project link:
- 

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
- This is how the page looks before user interaction, by default number is "3":
  - ![image](https://github.com/SpeedCodeNpo/ng-exercises/assets/132397719/05545d93-077d-4d02-a4f8-b10346b7258d)


- Screenshot after user typed "2" to create only 2 div ellements:
  - ![image](https://github.com/SpeedCodeNpo/ng-exercises/assets/132397719/fa6ef230-cf57-4e15-a21a-0eb356000fb6)


### Assignment instructions :

- Create UI as shown in screen snapshots.
- Create a directive name myMultiplier with these features:
  - It will receive a number as input and create that amount of copies of it's TemplateRef.
  - It will export these 4 values: 'index' number and 3 booleans : 'first' , 'middle' & 'last'.

### Hint :
- Use '@Input( ..... ) set render( .... ) {....}' in the decorator to get the input number value.
