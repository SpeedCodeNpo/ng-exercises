## Ng Exercises
Welcome to Speed Code Exercises
Solution version for assignment: card-20230714-1757

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
- The components are dispplayed as div with border and text inside, see included image below :
- ![image](https://github.com/SpeedCodeNpo/ng-exercises/assets/132397719/15f9a6ab-ecc9-472b-8b45-8023ee4f89cb)

  - (1) Demo .setItem storing functionality
        - User enters a key name and a value for that key.
        - Then clicks the ""Save .." button.
        - The key & its value will be saved to LocalStorage.
        - User can view Local Storage contents in the browser inspector, "applicatin" tab.
  -
  - (2) Demo the .getItem fetching functionality :
        - Here the user enters a key name and clicks button to see it's value.
  -        
  - (3) Demo the .removeItem functionality :
        - Here the user just clicks thebutton and the key given in section (2) will be removed from storage.
        
  - (4) Demo the full removal of all Local Storage key-value pairs.
        - User just clicks the button and all LocalStorage content is removed.

### Screenshot of the page before user input :
 - ![image](https://github.com/SpeedCodeNpo/ng-exercises/assets/132397719/1587bc2d-27d6-40a9-ba1b-cc7c83c31cef)
  
### Screenshot of page after adding one key-value :
- This is how the page looks for the rest of the sections before user interaction:
  - ![image](https://github.com/SpeedCodeNpo/ng-exercises/assets/132397719/930ce926-f6f2-4dad-87db-cc2cf1ebf816)


### Assignment instructions :

- Create UI as shown in screen snapshots.
- Create a component named "features" for the page (dont use the app.component fr the page).
