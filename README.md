## Ng Exercises
Welcome to Speed Code Exercises
Starter version for assignment: card-20230622-1243

### Practice goals :

- Practice custom structural directives with multiple exported values.

## Links
- 
### GitHub project starter link:
   https://github.com/SpeedCodeNpo/ng-exercises/tree/card-20230622-1243-q

- Stackblitz starter project link:
-
### GitHub project solution link:
   https://github.com/SpeedCodeNpo/ng-exercises/tree/card-20230622-1243-s

- Stackblitz solution project link:
- 

### Assignment title :
- Create a custom structural directive for an element group generator.

### What it trains you to do :
- To create your custom structural directive.
- To implement an input to the directive.
- To implement multiple exported values from the directive.

### Assignment spec :
- The user has an input field to enter a number:
- The page reacts to the number to display div boxes in a column.
- In each div box there are:
    - A number showing the div box serial order number
    - Text tags identifying the div box as either the first, middle or last.
    - Any div-box that is not first or last is tagged as "middle".
 
- Use a custom structural directive to create the div-boxes, to number them and to tag them.

### Screenshot of page :
- This is how the page looks before user interaction, by default number is "3":
  - ![image](https://github.com/SpeedCodeNpo/ng-exercises/assets/132397719/05545d93-077d-4d02-a4f8-b10346b7258d)


- Screenshot after user typed "2" to create only 2 div ellements:
  - ![image](https://github.com/SpeedCodeNpo/ng-exercises/assets/132397719/fa6ef230-cf57-4e15-a21a-0eb356000fb6)


### Assignment instructions :

- Create UI as shown in screen snapshots.
- 


### User experience :
- See screenshots above.
  
### Hint :
- For dynamic changes that react instantly to the user input use the ngOnChanges() lifecycle hook.
