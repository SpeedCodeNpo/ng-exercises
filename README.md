## Ng Exercises

Welcome to Speed Code Exercises
Instructions for assignment: card-20230619-1233

### Practice goals :

Practice creating a Custom Pipe for filtering

## Links
- 
- GitHub instruction & empty project link:
   https://github.com/SpeedCodeNpo/ng-exercises/tree/card-20230619-1233-q
-
- Stackblitz empty project link:
-
- GitHub solution project link:
   https://github.com/SpeedCodeNpo/ng-exercises/tree/card-20230619-1233-s

- Stackblitz solution project link:
- 

### Assignment title :

Creating a custom pipe to filter table rows.

### Screenshot of page :
-
-
- Screenshot of filter in action : 
- 

### Assignment instructions :

- In this assignment you will create a filter pipe for a list of students.
- The filter will be activated using 2 input fields, one for the topic the other for the value.
- In addition you will experience what a 'pure' & 'impure' pipe actually does.
- - For this you will create a button that adds more students to the list.
  - You will see that when the pipe is set to "pure" the filter will ignore the added students.
  - Then when you set the pipe decorator's "pure" property to 'false' the filter will react to added students.
-
- The data for the table is accesable via a prebuilt data service included in the starter version on branch card-20230616-1454-q.
- The service is at : /app/core/doginfo.service.ts

### User experience :

- The user has these 4 divs:
- - An input box to type in the topic you want to focus on.
- - An input box to type in a value with wich to filter the topic by.
- - An "Add Student" button to experience how the true / false value of the pipe's "pure" attribute works.
  - A table that by default displays all the students and when filtered diaplys the filter's result.
  
### How to experience the pure / impure pipe functionality :
- 

Here is a snapshot for illustration : 
- ![image](https://github.com/SpeedCodeNpo/ng-exercises/assets/132397719/099bed7a-fefd-4bad-92c7-4125ffde1362)

