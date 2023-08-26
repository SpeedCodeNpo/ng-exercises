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

## App UX:

- The app displays two sections:
  (1) The first section describes the app and has radio-button controls to switch the button modifiers in the second section.
      - Each pick of a radio button changes the color style of the button.

  (2) The second section is the one that the BEM Sass file affects.

  #### Screenshot of initial page before user interaction :

  ![image](https://github.com/SpeedCodeNpo/ng-exercises/assets/132397719/8695af42-4a2d-412f-8e54-b3842446b72f)

  (2) This is the interaction section, it includes a header, button and another header.

## Interaction with app:

In the interaction section the user interacts as follows: - When the use clicks the button :

- The button stays disabled until the response arives. - The result headerdisplays "wait...".
- When the response arrives the name of the random user is displayed and button is enabled again.

#### Screenshot of page after clicking "Get User" button :

![image](https://github.com/SpeedCodeNpo/ng-exercises/assets/132397719/0af1b238-2681-484a-bf0a-47c7b82f644a)

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
