## Ng Exercises
Welcome to Speed Code Exercises
Solution for assignment:  card-20230618-0711

### Practice goals :

Practice attribute directives with [NgClass].

## Links
- 
### GitHub instruction & empty project link:
   https://github.com/SpeedCodeNpo/ng-exercises/tree/card-20230618-0711-q
-
- Stackblitz empty project link:
-
### GitHub solution project link:
   https://github.com/SpeedCodeNpo/ng-exercises/tree/card-20230618-0711-s

- Stackblitz solution project link:
- 

### Assignment title :
Custom style a paragraph with [NgClass]

### Assignment spec :
- Create an app to demonstrate the capabilities of an Attribute Directive.
- The app will control the styling of a paragraph <p> element.
- The style will be one of these two :
  - (1) A custom style that the app user creates.
  - (2) A default style.
- In order to toggle between these two user clicks a checkbox.
  - If checked, then the default style is locked-in, the custom style is ignored.
  - When unchecked, the custom style is displayed.
- The custom style is created by the user who controlls these HTML attributes :
  - Color (red, blue or black)
  - Font size (smaller, medium or larger)
  - Border style (solid , dashed or none)
  - These are controlled by buttons.
  - At the bottom of the button panel the value of the custom class is displyed.

### Page design
- See image below of app screen before user input :
  - ![image](https://github.com/SpeedCodeNpo/ng-exercises/assets/132397719/eefbf556-3b5c-48d6-b445-4bb8d1db3dcb)

### User experience
- See image below of user creating a custom style:
  - ![image](https://github.com/SpeedCodeNpo/ng-exercises/assets/132397719/1169632b-a331-4cd0-883b-7e0d3d942771)

- See image below of user locking-in the default style.
  - This causes the default to be the style, ignoring the custom.
  - While locked-in as default the user can still build a custom style, but
  - they cannot see it because it is not activated.
  - ![image](https://github.com/SpeedCodeNpo/ng-exercises/assets/132397719/196260ad-00a7-4523-b942-eb83a1a88783)

- See image below where the checkbox is cleared thus enabling to see the current custom style :
  - ![image](https://github.com/SpeedCodeNpo/ng-exercises/assets/132397719/3dce33d6-6a44-4a24-9842-fd24c3100137)

### Assignment hints :
- Use the '[ngClass]' directive with a ternary operator.
- To save time on css content, the css styles are included in the app starter version.
  - It can be located at path : app/assets/css-for-my-style.scss
