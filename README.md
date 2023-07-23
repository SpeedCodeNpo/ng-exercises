# Ng Exercises

Welcome to Speed Code Exercises
Solution version for assignment: card-20230717-2303

## Assignment title : Implement basic routing

## Assignment Links

(1) Project starter:
  - GitHub link: https://github.com/SpeedCodeNpo/ng-exercises/tree/card-20230717-2303-q
  - Stackblitz link: 

(2) Project solution:
  - GitHub link: https://github.com/SpeedCodeNpo/ng-exercises/tree/card-20230717-2303-s
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
  ### More Angular routing for further training
  - Here is a list of more Angular routing features to be practiced in other assignments:
    - Guards to protect routes
    - Wildcard routes and 404 page (navigation attempt to a page that doesnt exist)
    - Setting the page title.
  - -----------------
    - Setting up redirects
    - Nesting routes, relative to 'non-root' component.
    - Using relative paths (relative to current URL segment)
  - -----------------
    - Accessing query parameters and fragments
    - Lazy loading pages
    - Link parameters array
    - LocationStrategy and browser URL styles
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

### Component 1 & 2 behavior :
- 

### There are 2 tasks in this assignment for UX :

This exrecise has two tasks:
- Task-1 : Routed components are displayed inside home page.
- Task-2 : Routed components are displayed on their own page.
- 

#### Task-1 : Have the link highlited with current route and display the component on the same page (home):
    (1) When click on link then the link text uses the ".activeFlag" css
        class to highlight the current active route chosen.
    (2) The component will be displayed on the same page, it replaces
        the previous component that was displayed (1 or 2).

Screenshot for illustration :
- In this screnshot this is the result of user clicking "First Component" :
![image](https://github.com/SpeedCodeNpo/ng-exercises/assets/132397719/d42fefd0-aaa3-4002-aa5b-50673d1a7f5a)



***
#### task-2 : Have the routed components display their own page.

          (1) When click on link then the home page disapers and the component (1 or 2)
              are displayed on their own page.
          (2) The page displayed needs to have a link back to the home page.

***

### Manually add routing to an existing app

- In the index.html add <base href="/">
- Create an AppRoutingModule
- Import the AppRouteModule into AppModule

### Create routing from home-page to 2 more components

- Create 3 components in a 'pages' folder : home, comp1 & comp2.
- Have the app comp call the home comp.
- In the home comp create 2 <a> tags one for each of the 2 components.

### Send params using Route Parameter

- xxxx

