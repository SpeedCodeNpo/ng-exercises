## Ng Exercises

Welcome to Speed Code Exercises
Instructions for assignment: card-202300614-2206-q

### Practice goals :

Practice using Property Binding

## Links
- 
- GitHub instruction & empty project link:
   https://github.com/SpeedCodeNpo/ng-exercises/tree/card-202300614-2206-q
-
- Stackblitz empty project link:
-
- GitHub solution project link:
   https://github.com/SpeedCodeNpo/ng-exercises/tree/card-202300614-2206-s

- Stackblitz solution project link:

### Assignment title :

Property binding the h2 element

### Assignment instructions :

- In this assignment you will use attribute binding to all the <h1> element attributes.
- All the attributes that exist for the h1 element are: 
- - innerHTML
- - textContent
- - tagName
- - className
---------------------
- Create a component for this page in a 'features' folder.
- The 'innerHTML' property: 
- For the value of 'innerHTML' create an input box.
- The user is asked to type  4 buttons with the possible align values:
- - align value can be : "left | right | center | justify"
- - The UI should look something like this :
- ![image](https://github.com/SpeedCodeNpo/ng-exercises/assets/132397719/e9222517-bafb-465b-a271-965a694d3d13)

- - - 
- The 'class' attribute: 
- For the value of 'class' attribute create 2 buttons:
- - class value can be : " | my-class-1 | my-class-2 "
- - The UI should look something like this :
- ![image](https://github.com/SpeedCodeNpo/ng-exercises/assets/132397719/147b51e1-8ab2-4d04-a2df-fd7cd0269c0a)

- - - - 
- The 'style' attribute: 
- For the value of 'style' attribute create 2 buttons:
- - style value can be : " | my-style-1 | my-style-2 "
- - The UI should look something like this :
- ![image](https://github.com/SpeedCodeNpo/ng-exercises/assets/132397719/a5324086-d72f-4fc2-a4ed-fab5b3a359d8)
  
- - - 
- The 'id' attribute: 
- For the value of 'id' attribute create 2 buttons:
- - id value can be : " | jack-id | jill-id "
- - The UI should look something like this :
- ![image](https://github.com/SpeedCodeNpo/ng-exercises/assets/132397719/7b84b3f1-e928-4a95-8f66-9295cfbb5c66)


---------------------
- FYI: 
- - These are not properties of the h2 element, properties are NOT part of <HTML> syntax.
- - Properties are are part of the DOM (Document Object Model = a way of representig HTML in JS) syntax.
- - The DOM properties for h1 are: 
- - innerHTML	: Gets or sets the HTML content of the element.
- - textContent	: Gets or sets the text content of the element.
- - tagName	    : Gets the tag name of the element.
- - className	: Gets or sets the class name of the element.
- In another assignment we focus on property binding and then use these h1 properties.

### Page design

- The page displays a list of div blocks, each dedicated to its own h2 attribute
- Here is an example screen shot of the page to create:

### User experience :

Here is the user flow:
(1) The user can scroll veritcaly to any div block.
(2) In each block the user can use interact to see affect of the specific attribute on the page.

### Assignment hint :

- Use attribute binding, this is a one-way binding from the data-source (the component) to the view (the template).
