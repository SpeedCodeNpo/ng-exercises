## Ng Exercises

Welcome to Speed Code Exercises
Instructions for assignment: card-202300613-1311

### Practice goals :

Practice using Attribute Binding

## Links
- 
- GitHub instruction & empty project link:
   https://github.com/SpeedCodeNpo/ng-exercises/tree/card-20230613-1311-q
-
- Stackblitz empty project link:
-
- GitHub solution project link:
   https://github.com/SpeedCodeNpo/ng-exercises/tree/card-20230613-1311-s

- Stackblitz solution project link:
- 

### Assignment title :

Attribute binding the h1 element

### Assignment instructions :

- In this assignment you will use attribute binding to all the <h1> element attributes.
- All the attributes that exist for the h1 element are: 
- - align
- - class
- - id
- - style
---------------------
- Create a component for this page in a 'features' folder.
- The 'align' attribute: 
- For the value of 'align' create a 4 buttons with the possible align values:
- - align value can be : "left | right | center | justify"
- - - 
- The 'class' attribute: 
- For the value of 'class' attribute create 2 buttons:
- - class value can be : " | my-class-1 | my-class-2 "
- - - 
- The 'id' attribute: 
- For the value of 'id' attribute create 2 buttons:
- - id value can be : " | jack-id | jill-id "
- - - 
- The 'style' attribute: 
- For the value of 'style' attribute create 2 buttons:
- - style value can be : " | my-style-1 | my-style-2 "
 


---------------------
- FYI: 
- - These are not properties of the h1 element, properties are NOT part of <HTML> syntax.
- - Properties are are part of the DOM (Document Object Model = a way of representig HTML in JS) syntax.
- - The DOM properties for h1 are: 
- - innerHTML	: Gets or sets the HTML content of the element.
- - textContent	: Gets or sets the text content of the element.
- - tagName	    : Gets the tag name of the element.
- - className	: Gets or sets the class name of the element.
- In another assignment we focus on property binding and then use these h1 properties.

### Page design

- The page displays a list of div blocks, each dedicated to its own pipe implementation
- Here is an example screen shot of the page to create:
  ![image](https://github.com/SpeedCodeNpo/ng-exercises/assets/132397719/de761350-b353-4930-a92e-9e6046165e4f)

The following image shows the div blocks content in more detail:
![image](https://github.com/SpeedCodeNpo/ng-exercises/assets/132397719/d776c4e2-54c5-466f-b41c-737d0e6a7ded)

### User experience :

Here is the user flow:
(1) The user can scroll veritcaly to any div block.
(2) In each block the user can use the input boxes to type in info and see the pipe convert the info.

### Assignment hint :

- Use the relavent piping for each div-block.
