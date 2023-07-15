## Ng Exercises
Welcome to Speed Code Exercises
Instructions for assignment: card-20230714-1757

### Practice goals :

- Practice basic standalone component, includes:
  - Use CLI to create a standalone (SA) component.
  - Make a regular component use this SA component.
  - Have the SA component use a regular component.

## Links
- 
### GitHub project starter link:
   https://github.com/SpeedCodeNpo/ng-exercises/tree/card-20230714-1757-q

- Stackblitz starter project link:
-
### GitHub project solution link:
   https://github.com/SpeedCodeNpo/ng-exercises/tree/card-20230714-1757-s

- Stackblitz solution project link:

### Assignment title :
- Practice standalone components

### Assignment spec :
- The UI displays a 3 layer grouping of components, one inside the other.
- FYI : The styling are already included in the src/styles.scss file.
- The components are dispplayed as div with border and text inside, see included image below :
- ![image](https://github.com/SpeedCodeNpo/ng-exercises/assets/132397719/15f9a6ab-ecc9-472b-8b45-8023ee4f89cb)

  - (1) Layer 1
        - This is a regular component named 'Comp1Component'.
        - It displays a header and text as shown in attached image.
        - It calls uses a standalone component named 'MyStandaloneComponent'.
  
  - (2) Layer 2 :
        - This is a standalone component named 'MyStandaloneComponent'.
        - It displays a header and text as shown in attached image.
        - It calls a component named  'Comp2Component' from a module named 'Module2'
          
  - (3) Layer 3 :
        - This is a component from a module named 'Modle2'
        - It displays a header and text as shown in attached image.


### Assignment instructions :

- Create UI as shown in screen snapshot.
- Create a component named "features" for the page (dont use the app.component fr the page).
