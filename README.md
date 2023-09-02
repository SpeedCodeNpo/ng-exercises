# Ng Exercises

Welcome to Speed Code Exercises
Solution version for assignment: card-20230830-1100
Subject: Angular Material

## Assignment title : Practice RxJs Subject and BehaviorSubject

### Assignment Links

(1) Project starter:

- GitHub link: https://github.com/SpeedCodeNpo/ng-exercises/tree/card-20230830-1100-q
- Stackblitz link:

(2) Project solution:

- GitHub link: https://github.com/SpeedCodeNpo/ng-exercises/tree/card-20230830-1100-s
- Stackblitz link:

### Assignment goals :

- Practice basics of Angular Material
  - Create folder and module for Angular Material imports
  - Use Angular Material radio buttons.
  - Use Angular material buton with 3 different styles.
  - Use ngSwitch directive to switch between the different button styles.

## App display:

- The app displays two sections:
  (1) A header and a paragraph with link to angular material website.

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
