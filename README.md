# Ng Exercises

Welcome to Speed Code Exercises
Starter version for assignment: card-20230906-1313
Subject: Template Driven Forms

## Assignment title : Practice Template Driven Forms
### Assignment Links

(1) Project starter:

- GitHub link: https://github.com/SpeedCodeNpo/ng-exercises/tree/card-20230906-1313-q
- Stackblitz link:

(2) Project solution:

- GitHub link: https://github.com/SpeedCodeNpo/ng-exercises/tree/card-20230906-1313-s
- Stackblitz link:

### Assignment goals :

- Practice Template Driven Forms by creating a basic login page :
  - Use validation on input fields with error styling and message.
  - Enabling the submit button only if input valid.
  - Displaying the submitted data only if submited succesfuly.

## App display:

- The app displays three sections:
  (1) A header and a paragraph with info on exercise.
  (2) A form with two input fields and a submit button.
  (3) A section displaying the result of a successful submit.

  ## Screenshot of initial page before user interaction :

- ![image](https://github.com/SpeedCodeNpo/ng-exercises/assets/132397719/72dce3f5-902a-4095-8c18-69cae7dab5fa)


## Interaction with app:

- The interaction happens in the form section.
- The two input fields have validation as follows:
  - For both fields if left empty then error effect is triggered.
  - For rmail field if not in an email format then error.
- The error effect changes color of input field color and displays a message.
- If fields don't have valid data then the submit button is disabled.
- When button enabled then clicking it will trigger the third section to display the submitted values.
- The third section will be hidden if after submit one of the input fields is interacted with.

## Screenshot of the two fields having inalid input and disabled Submit button:

- ![image](https://github.com/SpeedCodeNpo/ng-exercises/assets/132397719/58642e75-2829-4c15-8e03-e7c322338efb)

## Screenshot of page after clicking "Submit" button :

- ![image](https://github.com/SpeedCodeNpo/ng-exercises/assets/132397719/69a1054a-e922-4294-8656-8beb621bee1e)

## Your task :
- (1) Wireup FormsModule to app.module.
- (2) Add validation and error effect to the two input fields.
- (3) Add logic to manage Submit button accessability.
- (4) Add logic to control the third section showing submitted values.

## Included in the starter branch :
- The styles are predefined in the styles.scss and in comp1 component.
- The comp1 template is pre-populated with the layout.
- The comp1 ts class is pre-populated with function and variable names.
