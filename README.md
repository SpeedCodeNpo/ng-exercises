## Ng Exercises  [Edit on StackBlitz ⚡️](https://stackblitz.com/edit/ng-exercise1)
Welcome to Speed Code Exercises.
This project is the base project for "Angular Skill".

## This version : main : 20230511-1745
This current version is an "ng new ..." project.
It's purpose is to be a starting point for every Assignment + Solution.

## How to create an assignment branch from this main branch

### Step 1 : Create a name for the branch
- (1) Each assignments has 2 branches, a "Question" and an "Solution" branch.
- (2) The question branch has all the codebase needed to start the assignment.
- (3) The solution branch has all the codebase for the solution.
- (4) Name Question branch with this convention: CARD-YYYMMDD-HHMM-Q
    - For the solution branch use "S" instead of "Q".
    - The timestamp section of the convention is from the card creation spreadsheet.

### Step - 2 : Create the branch
- (1) Checkout "main branch". FYI it is locked so cannot change its content.
- (2) From this branch create your question branch example: git switch -c CARD-20231106-1417-Q
- - FYI When creating a new branch this README.md file is overwritten by an auto-created Stackblitz version.
- (3) In the new README.md file copy the content in the APENDIX below and update it to your project.
- (3) Work on that branch and commit as many times as needed.
- (4) When done create from it another branch for the solution: git switch -c CARD-20231106-1417-S
- (5) When done commiting all your coding sessions you are done working on the branch.

### Step - 3 : Maintenance
- (1) When need to fix bugs or update the Question or Soultion you can open a temporary branch under the branch you want to fix/update, when done merge to the parent branch and delete the temporary branch.

##  A P E N D I X :
### Template content to copy into new README.md file:
- The content below is just an example, edit it to your specific project case.

## Ng Exercises  
Welcome to Speed Code Exercises.

## This branch is : Card-20230511-1758-Q

### Assignment instructions :
- Write code that will display the value of a parameter named "message" defined in ParentComponent, in in a template belonging to component ChildComponent.
- Make the parentComponent a child of AppComponent.

- The output displayed should be:
This is App Component
This is Parent Component
This is Child Component
The Child Component message is: Hello, World!

### Assignment hint :
- Create the components and use interpolation to pass the value of the message from parent to child componnet.

### Solution
- The solution can be found at this link : [Card-20230511-1758-S](https://stackblitz.com/edit/ng-exercise1?file=README.md)
