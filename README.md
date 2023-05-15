## Ng Exercises

Welcome to Speed Code Exercises.

## This branch is solution to : card-20230515-1500-s

- GitHub link: https://github.com/SpeedCodeNpo/ng-exercises/tree/card-20230515-1500-s

### Assignment title :

Two way binding with directive

### Assignment instructions :

- Implement two-way binding on an input box using an Angular directive.
- Name the input component MyInputComponent.
- DO NOT use the [(ngModel)] two-way-binding directive, do this assignment.

### User experience specification

- Display an input element with a default value.
- Under the input-box display text showing the same default value.
- While the user types in the input box the text below needs to update with same value.

### Assignment hint :

- Use ngModel to implememnt two way binding.

### Assignment Solution :
1. Create a new component called MyInputComponent.
2. Inside the component's template create an input-box element with 2 bindings:
   2a. The first binding is a property binding [value].
      FYI, you may also use [ngValue] it is intended for all types 
      while [value] is just for "string" types.
   2b. The second binding is event-binding for keystrokes, use (keyup).
       This means that after he user finished input of key then the event is triggered.
3. In the component's typescript wireup the property and the event function.

For more details see the solution code.

### Link to the source assignment branch:
- https://github.com/SpeedCodeNpo/ng-exercises/tree/card-20230515-1500-q
