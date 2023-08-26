# Ng Exercises

Welcome to Speed Code Exercises
Starter version for assignment: card-20230823-2229

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
  - normal : The button in defualt colors.
  - success : The button turns green.
  - warn : The button turns red.

#### Screenshot of page after picking the success option :

![image](https://github.com/SpeedCodeNpo/ng-exercises/assets/132397719/e2fa3a94-97a3-43bb-8b6f-7f3822e46ca7)

#### Screenshot of page after picking the warn option :

![image](https://github.com/SpeedCodeNpo/ng-exercises/assets/132397719/e510d7c2-b568-4ffc-8664-00547e5765b6)

## Your task :

- (1) Your task is to code the scss file of 'comp1' component.
- (2) You need only to style the bottom section (the section after the "hr line") of the page.
- (3) First style the header and the following two paragraphs.
- (4) Use a modifier on the second paragraphs to make it's font bold.
- (5) Then style the button which is to be considered a block in our implementation of BEM. - Create 3 modifiers for normal, success and warn.

## Included in the starter branch :

- A component named 'comp1' which already has the boiler plate needed.
- The component's template file exists excluding the class names.
- The styles.css is empty so you start from scratch.
