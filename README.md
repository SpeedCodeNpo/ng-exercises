## Ng Exercises
Welcome to Speed Code Exercises
Starter version for assignment: card-20230622-1243

### Practice goals :

- Practice custom structural directives with multiple exported values.

## Links
- 
### GitHub project starter link:
   https://github.com/SpeedCodeNpo/ng-exercises/tree/card-20230622-1243-q
-
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
- - ![image](https://github.com/SpeedCodeNpo/ng-exercises/assets/132397719/47ffeb3c-f394-4ceb-809b-a3bcc5c8e00c)

-
- Screenshot after user typed "2" to create only 2 div ellements:
- - ![image](https://github.com/SpeedCodeNpo/ng-exercises/assets/132397719/be930255-8c3e-4cad-bf64-ed81912bc026)


### Assignment instructions :

- A <p> paragraph sentence is displayed with a section defined by <span>.
- The <span> neeeds to be controlled by a custom attribute directive whose values are dynamically set
  by the color & font-style controls.


### User experience :
- See screenshots above.
  
### Hint :
- For dynamic changes that react instantly to the user input use the ngOnChanges() lifecycle hook.
