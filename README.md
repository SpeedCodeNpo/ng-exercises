# Ng Exercises

Welcome to Speed Code Exercises
Starter version for assignment: card-20230804-1821

## Assignment title : Practice basic Observables RxJs

### Assignment Links

(1) Project starter:
  - GitHub link: https://github.com/SpeedCodeNpo/ng-exercises/tree/card-20230804-1821-q
  - Stackblitz link: 

(2) Project solution:
  - GitHub link: https://github.com/SpeedCodeNpo/ng-exercises/tree/card-20230804-1821-s
  - Stackblitz link: 

### Assignment goals :

- Practice these Routing skills:
  - Manually add routing to an existing app
  - Create simple routing from home-page to 2 more components
  - Pass data from one component to another using route parameters.
  - Implement in two UX styles :
    - (1) Display the routed components on the home page.
    - (2) Display the routed components in their own page.

***      
## Assignment spec :

### User experience UX:
- The default home page is displayed with a div border wrapping each component.
- The home component has 3 options:
  (1) A link routing to component one.
  (2) A link routing to component two.
  (3) An input box + button.
      - User types a message in the inpiut box and when clicks on the button then
         they are routed to a comp-2-details component that displays the message.
  
#### Screenshot of initial page before user interaction :
![image](https://github.com/SpeedCodeNpo/ng-exercises/assets/132397719/2a07ee72-4e19-4077-bcc0-2cd1a8528c7c)

***

### Component 1 & 2 specification :
- Both components have same spec, just their names are different.
- Only 2 elments are displayed:
  (1) A text : "This is comp1 component" (or comp2 if it is component 2).
  (2) A link back to the home page.
#### Screenshot of result of activating route to "First Component" :
- Notice that the active linked is highliaghted, use the "routerLinkActive" property set to value of the the ".activeFlag" CSS
  class defined in the global app css file.
![image](https://github.com/SpeedCodeNpo/ng-exercises/assets/132397719/c928c514-2d55-44cf-aefc-e0d39bd78d92)


### "Component2-details" specification :
- This has 3 elments :
  (1) A text : "This is comp1 component" (or comp2 if it is component 2).
  (2) A text : "The message is : " and the message typed in the input box in home component.
  (3) A link back to the home page.
    
#### Screenshot of "Component2-details" component and how to interact with it:
![image](https://github.com/SpeedCodeNpo/ng-exercises/assets/132397719/920bbdc3-a2fd-43f2-978f-69c645b47c75)

### Implement this assignment in two UX flavours:

This exrecise is implemented as two tasks, each creates a different UX experience with same components.
- Task-1 : Routed components are displayed inside home page.
           This is the default task, first implement this UX style. See screenshots above.
- Task-2 : Routed components are displayed on their own page.
           This is done by changing the location of the <router-outlet> from app to home component.

***

### Manually add routing to an existing app
- The starter project for this assignment nedds to be updated to include Routing.
- This means that the CLI will not auto-create a project with routing, you wireup the routing manually.

