## Ng Exercises

Welcome to Speed Code Exercises
Sarter version for assignment: card-20230623-1548

### Practice goals :

- Practice the 'ngOn...' lifecycle hooks.
- FYI: This does not include the 'ngAfter...' lifecycle hooks.

## Links


### GitHub project starter link:

https://github.com/SpeedCodeNpo/ng-exercises/tree/card-20230623-1548-q

- Stackblitz starter project link:
-

### GitHub project solution link:

https://github.com/SpeedCodeNpo/ng-exercises/tree/card-20230623-1548-s

- Stackblitz solution project link:
-

### Assignment title :

- Create a lifecycle hook demo app.

### What it trains you to do :

- To implement and understand these four lifecycle hooks:
  - ngOnChanges
  - ngOnInit
  - ngDoCheck
  - ngOnDestroy

### Assignment spec :

- The page displays components as box frames, on inside the other as they are in the component tree.
- The component names are: app.component , component-1 & component-2.
- App.component can be run in two demo modes,
  - You will need to edit it's template html to run each demo seperatly.
  - Demo-1 invokes component-1 without sending a value to component-1, this means that the ngOnChanges wont be triggered.
  - Demo-2 invokes component-1 whit a value for component-1, this will trigger ngOnChange.
- Component-1 displays :
  -  Values showing the state of each of the component's four lifecycle hooks.
  -  Highlites any lifecycle-hook text whose value is true.
  -  Displays an input box, every charcter typed in it will increment the ngDoCheck counter and display its value.
  -  Displays a button named: DESTROY COMPONENT 2.
    -  Clicking on that button destroys component-1's child compoonent.
    -  In the chrome dev tools see the console logged values,
    -  you should see that component-2 logged message is that onNgDestroy was triggered
   
- Component-2 displays :
- This componenet only displays text, it's main use is for seeing that onNgDestroy is triggered.

### Screenshot of page :

- This is how the page looks before user interaction, it starts with ngOnChanges being activated twice:

  - ![image](https://github.com/SpeedCodeNpo/ng-exercises/assets/132397719/f4255d00-c68d-42e8-8457-8f169806a50c)

- Screenshot after user typed "123" and clicked the 'DESTROY COMPONENT 2':
  - ![image](https://github.com/SpeedCodeNpo/ng-exercises/assets/132397719/a693a9c5-8e07-471f-8c6c-50ef06cb3849)


### Assignment instructions :

- Create UI as shown in screen snapshots.
- In the app.component.html template create two variations for using the component1 tag :
  - The first one is calling the tag as is without any added directives.
  - The second variation is passing a value from app.component to component-1, this triggers 'ngOnChanges'.
- The rest of the instructions are described above 'Assignment Spec' section.

