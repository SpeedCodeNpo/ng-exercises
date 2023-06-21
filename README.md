## Ng Exercises
Welcome to Speed Code Exercises
Starter version for assignment: card-20230621-1245

### Practice goals :

- Practice custom attribute directives with multiple inputs.

## Links
- 
### GitHub project starter link:
   https://github.com/SpeedCodeNpo/ng-exercises/tree/card-20230621-1245-q
-
- Stackblitz starter project link:
-
### GitHub project solution link:
   https://github.com/SpeedCodeNpo/ng-exercises/tree/card-20230621-1245-s

- Stackblitz solution project link:
- 

### Assignment title :
- Create a dynamicly styles highlight-marker.

### What it trains you to do :
- To create your custom attribute directives.
- To implement multiple inputs to your directive.

### Assignment spec :
- The user has two input controls:
- - An input box to type in the color.
- - A radio button to pick one of these font-style values:
- - - normal: The default font style.
- - - italic: The text is italicized.
- 
- A sentence is displayed with a section of it highlited.
- The default highlight values are:
- - color "yellow"
- - font-style is "normal"
- 
- Use a custom attribute directive to inplemnet this feature. 


### Screenshot of page :
- This is how the page looks before user interaction:
- - ![image](https://github.com/SpeedCodeNpo/ng-exercises/assets/132397719/205895b0-de9a-4c5b-9499-5ed1abb4afc2)
-
- Screenshot after changed color and font-style:
- - ![image](https://github.com/SpeedCodeNpo/ng-exercises/assets/132397719/7571ad0c-b33a-4bf9-8d1e-335a5399ba36)


### Assignment instructions :

- A <p> paragraph sentence is displayed with a section defined by <span>.
- The <span> neeeds to be controlled by a custom attribute directive whose values are dynamically set
  by the color & font-style controls.


### User experience :
- See screenshots above.
  
### Hint :
- For dynamic changes that react instantly to the user input use the ngOnChanges() lifecycle hook.
