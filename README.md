## Ng Exercises
Welcome to Speed Code Exercises
Instructions version for assignment: card-20230710-2144

### Practice goals :

- Practice Atomic Design pattern using Angular:
  - Create an atomic component
  - Host the atomic component in another component.

## Links
- 
### GitHub project starter link:
   https://github.com/SpeedCodeNpo/ng-exercises/tree/card-20230710-2144-q

- Stackblitz starter project link:

### GitHub project solution link:
   https://github.com/SpeedCodeNpo/ng-exercises/tree/card-20230710-2144-s

- Stackblitz solution project link:

### Assignment title :
- Implement atomic design with an atom component

### Assignment spec :
- The UI displays a button, when clicked logs message to console.log .
- The implementation needs to follow the following giodelines:
      - Use 2 components to implement this assignment.
            - One component is the atom component (a button)
            - The second component is the host component using the atom button
            - The host component needs to be located in a 'features' folder.
- Details on the atom-component
      - It needs to be accessable via a 'core-view' module.
      - It is to be named 'atom-button', located in an 'atoms' folder.
      - The path to the atom-button component is : app/core-view/components/atoms/atom-button
      - It needs to expose 3 attributes whom have default values : 
            - atomButtonText (default is "Atom Button")
            - atomButtonColor (default is "light-gray")
            - atomButtonDisabled (default is true)
- The host component needs to define values for these 3 attributes as follows:
            - atomButtonText value to define is "Hello".
            - atomButtonColor value to define is "LightGreen".
            - atomButtonDisabled value to define is false.


### Screenshot of the page before user input :
 - ![image](https://github.com/SpeedCodeNpo/ng-exercises/assets/132397719/e8e959ba-ffd6-4a8b-93cb-f46b1798d57d)

