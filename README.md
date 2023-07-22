## Ng Exercises

Welcome to Speed Code Exercises
Solution version for assignment: card-20230717-2303

### Assignment title :

- Implement basic routing

### Practice goals :

- Practice these Routing skills:
  - Manually add routing to an existing app
  - Create simple routing from home-page and 2 more components
  - Using Route Parameter (passing info using routes).
  ***
  - Wildcard routes and 404 page (navigation attempt to a page that doesnt exist)
  - Setting up redirects
  - Nesting routes, relative to 'non-root' component.
  - Setting the page title.
  - Using relative paths (relative to current URL segment)
  ***
  - Accessing query parameters and fragments
  - Lazy loading pages
  - Guards to prevent unautho3protect routes
  - Link parameters array
  - LocationStrategy and browser URL styles

## Links

-

### GitHub project starter link:

https://github.com/SpeedCodeNpo/ng-exercises/tree/card-20230717-2303-q

- Stackblitz starter project link:

### GitHub project solution link:

https://github.com/SpeedCodeNpo/ng-exercises/tree/card-20230717-2303-s

- Stackblitz solution project link:

### Assignment spec :

### Manually add routing to an existing app

- In the index.html add <base href="/">
- Create an AppRoutingModule
- Import the AppRouteModule into AppModule

### Create routing from home-page to 2 more components
- Create 3 components in a 'pages' folder : home, comp1 & comp2.
- Have the app comp call the home comp.
- In the home comp create 2 <a> tags one for each of the 2 components.

### Send params using Route Parameter
- Inside comp1 create a route url that passes the word "Hello" to comp2.


### There are 2 tasks in this assignment for UX :
 This exrecise has two tasks:
 ### task-1 : Have the routed components displayed on the same page (home):
          (1) When click on link then the link text uses the ".activeFlag" css
              class to highlight the current active route chosen.
          (2) The component will be displayed on the same page, it replaces
               the previous component that was displayed (1 or 2).

 ### task-2 : Have the routed components display their own page.
          (1) When click on link then the home page disapers and the component (1 or 2)
              are displayed on their own page.
          (2) The page displayed needs to have a link back to the home page.

### Screenshot of the page before user input :

- ![image](https://github.com/SpeedCodeNpo/ng-exercises/assets/132397719/e8e959ba-ffd6-4a8b-93cb-f46b1798d57d)
