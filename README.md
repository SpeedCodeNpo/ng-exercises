## Ng Exercises  [Edit on StackBlitz ⚡️](https://stackblitz.com/edit/ng-exercise1?file=README.md)
Welcome to Speed Code Exercises.

## This branch is : Card-20230511-1758-Q

### Assignment instructions :
- Write code that will display the value of a parameter named "message" defined in ParentComponent, in in a template belonging to component ChildComponent.
- Make the parentComponent a child of AppComponent.
- Add a unit test for the child component.

- The output displayed should be:
This is App Component
This is Parent Component
This is Child Component
The Child Component message is: Hello, World!

### Assignment hint :
- Create the components and use interpolation to pass the value of the message from parent to child componnet.

### Assignment Solution :
1. Create a new Angular project using the ng new command.
2. In the project directory, create a new component called ParentComponent.
3. In the ParentComponent template, add the following code:
   <h1>Parent Component</h1>
   <child-component [message]="'Hello, World!'"></child-component>

4. In the ParentComponent class, add the following code:

   export class ParentComponent {
     message = 'Hello, World!';
   }

5. Create a new component called ChildComponent.
   In the ChildComponent template, add the following code:
   <h2>Child Component</h2>
   {{ message }}

6. In the ChildComponent class, add the following code:

   export class ChildComponent {
     @Input() message: string;
   }

7. That's it, run the application using the ng serve command.
