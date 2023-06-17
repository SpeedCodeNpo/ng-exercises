## Ng Exercises

Welcome to Speed Code Exercises
Solution for assignment: card-20230616-1454

### Practice goals :

Practice creating a Custom Pipe for filtering

## Links
- 
- GitHub instruction & empty project link:
   https://github.com/SpeedCodeNpo/ng-exercises/tree/card-20230616-1454-q
-
- Stackblitz empty project link:
-
- GitHub solution project link:
   https://github.com/SpeedCodeNpo/ng-exercises/tree/card-20230616-1454-s

- Stackblitz solution project link:
- 

### Assignment title :

Creating a custom pipe to filter table rows.

### Screenshot of page :
- ![image](https://github.com/SpeedCodeNpo/ng-exercises/assets/132397719/d81dffad-9f02-495c-b12b-ced4291e6e8f)
-
- Screenshot of filter in action : 
- ![image](https://github.com/SpeedCodeNpo/ng-exercises/assets/132397719/661f71fa-1684-45c7-9ba5-153fc62f719d)

### Assignment instructions :

- In this assignment you will create a filter pipe for a list of students.
- The filter will be activated using 2 input fields, one for the topic the other for the value.
- In addition you will experience what a 'pure' & 'impure' pipe actually does.
- - For this you will create a button that adds more students to the list.
  - You will see that when the pipe is set to "pure" the filter will ignore the added students.
  - Then when you set the pipe decorator's "pure" property to 'false' the filter will react to added students.
-
- The data for the table is accesable via a prebuilt data service included in this template.

### User experience :

- The user has these 4 divs:
- - An input box to type in the topic you want to focus on.
- - An input box to type in a value with wich to filter the topic by.
- - An "Add Student" button to experience how the true / false value of the pipe's "pure" attribute works.
  - A table that by default displays all the students and when filtered diaplys the filter's result.
  
### How to experience the pure / impure pipe functionality :
- In the code update the @Pipe() decorator's "pure" property to false. This sets the pipe to be "impure".
- Run the app.
- Click the Add Student button, a new row in the table appears with data of the new student.
- Type in the filter values topic  'Chapter' and value for topic 'Test'.
- Only the added student should be displayed in the table.
- Now click the Add student again and again and you should see more demo students added to the table.
- This is happening because the pipe is 'impure' that means it uses change detection to see if any
-    of the student list items is updated, since it is (because we are adding items to the list) then
-    the filter recalculates and updates.
- But if you change the value of the pure property to 'true' then clicking the Add Student will have no affect
-   this is because the pipe wont use change detection so it is not aware that items are added and wont trigger recalculation.

Here is a snapshot for illustration : 
- ![image](https://github.com/SpeedCodeNpo/ng-exercises/assets/132397719/099bed7a-fefd-4bad-92c7-4125ffde1362)

