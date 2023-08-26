# Ng Exercises

Welcome to Speed Code Exercises
Solution version for assignment: card-20230823-2229

## Assignment title :

Practice BEM naming convention with Sass CSS

### Assignment Links

(1) Project starter:

- GitHub link: https://github.com/SpeedCodeNpo/ng-exercises/tree/card-20230823-2229-q
- Stackblitz link:

(2) Project solution:

- GitHub link: https://github.com/SpeedCodeNpo/ng-exercises/tree/card-20230823-2229-s
- Stackblitz link:

### Assignment goals :

- Practice using BEM naming convention in Sass CSS
  - In SCSS file create two BEM blocks.
  - The first have an elment and a modifier for the elment.
  - The second block is a button with a modifier (no elment).

## App design:

- The app displays two sections:
  (1) The top section describes the app and has radio-button controls that affect the bottom section.
  (2) The bottom section is the one that the BEM Sass file affects.

  #### Screenshot of initial page before user interaction :

![image](https://github.com/SpeedCodeNpo/ng-exercises/assets/132397719/585eabf4-8a03-4c7c-80a4-418df41c5985)


## Interaction with app:

In the interaction section the user interacts as follows: 
  - By clicking the different radio button options the color of the button in the bottom section changes.
  - The three radio-button options are:
    - normal  : The button in defualt colors.
    - success : The button turns green.
    - warn    : The button turns red.

#### Screenshot of page after picking the success option :
![image](https://github.com/SpeedCodeNpo/ng-exercises/assets/132397719/e2fa3a94-97a3-43bb-8b6f-7f3822e46ca7)


#### Screenshot of page after picking the warn option :
![image](https://github.com/SpeedCodeNpo/ng-exercises/assets/132397719/e510d7c2-b568-4ffc-8664-00547e5765b6)


## Included in the starter branch :

- A component named 'comp1' which already has the boiler plate needed.
- The component's template file exists with the layout and directives.
- The styles.css is also populated with classes needed.

## Your task :

- (1) Add an interface named 'UserInterface' to support the following object format:
  results: [
  {
  email: string;
  gender: string;
  name: {
  title: string;
  first: string;
  last: string;
  };
  }
  ];

- (2) Add a service named 'HttpService' with a method 'getUser()' that uses the 'https://randomuser.me/api/' API to return an object of type 'UserInterface'.

- (3) Wire up comp1 to the service and the component's template to the component.
