## Updated: Jun 15,2023 17:00

## Ng Exercises

Welcome to Speed Code Exercises
Instructions for assignment: card-20230614-2206-q

### Practice goals :

Practice using Property Binding

## Links

- GitHub instruction & empty project link:
  https://github.com/SpeedCodeNpo/ng-exercises/tree/card-20230614-2206-q
-
- Stackblitz empty project link:
-
- GitHub solution project link:
  https://github.com/SpeedCodeNpo/ng-exercises/tree/card-20230614-2206-s

- Stackblitz solution project link:

### Assignment title :

Property binding an <h2> DOM element:

- Property binding is a one-way binding from the data-source (the component) to the view (the template) specifically to the DOM (while attribuite binding is also from data-source to view but in this case the view is the HTML attribute rendered by the browser).

### Assignment instructions :

- In this assignment you will use attribute binding to two (of four) <h1> element DOM properties.
- Following are 4 <h> element DOM properties, the first two will be in the assignment:
- - className
- - textContent
- - innerHTML
- - tagName

---

- Create a component for this page in a 'features' folder.

---
The general design of the page should look something like this:
![image](https://github.com/SpeedCodeNpo/ng-exercises/assets/132397719/3c7f7801-c37c-4370-b695-cd672bbd69d2)

---
- The 'textContent' property:
- For the value of 'textContent' create an input box.
- Whatever the user types in the input box will be transfered to the DOM's <h> tag 'textContent' property.
- - The UI should look something like this :
- ![image](https://github.com/SpeedCodeNpo/ng-exercises/assets/132397719/398d2203-7f18-457b-8c91-0a36c0be9a62)
- -
- - When typing in the input box the display is:
  - ![image](https://github.com/SpeedCodeNpo/ng-exercises/assets/132397719/cc98f868-4b13-4360-be8b-4ef8624d5ebd)


---

- The 'className' attribute:
- For the value of 'class' attribute create 2 buttons:
- - class value can be : " | my-class-1 | my-class-2 "
- - On every click the DOM property className will change.
- - The UI should look something like this :
- ![image](https://github.com/SpeedCodeNpo/ng-exercises/assets/132397719/939d4d06-2c18-43c6-aaf2-cf329a87f975)
-
- - When choosing class-1 button the display changes as shown:   color: red;  font-size: 1em;
  - ![image](https://github.com/SpeedCodeNpo/ng-exercises/assets/132397719/9b4cbe37-3dee-4046-ba50-a5b50f0906f0)
-
-
- - When choosing class-2 button the display changes as shown:   color: blue;  font-size: 0.75em;
  - ![image](https://github.com/SpeedCodeNpo/ng-exercises/assets/132397719/9c50f7ea-2359-4696-9025-b5700d5a893a)

---

- FYI:
- - These 'textContent' & 'className' & are Properties of DOM's mirroring of the <h> element.
- - They are different then the HTML attributes of the <h> element.
- -
- - This assignment uses the <h> element because the names of the HTML attribute and DOM properties are different. That is in contrast to the <img> element where the HTML attributes and DOM properies have exacty same names which is confusing when learning the difference between attribute & property binding.

### Page design

- The page displays a 2 div blocks with a border surrounding them.
- Here is an example screen shot of the page to create:

### User experience :

Self explantory.

### Assignment hint :
