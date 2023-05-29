## Ng Exercises
Welcome to Speed Code Exercises
Instructions for assignment:  card-20230526-1133

## Branch name : card-20230526-1133-q
- GitHub link: https://github.com/SpeedCodeNpo/ng-exercises/tree/card-20230526-1133-q

### Assignment title :
Word scramble game using data binding

### Assignment instructions :
- As a starting point you are given a service (in the 'core' module).
- This service has the data (lists of words) and functions (to fetch and scramble words).
- 
- Your task is to create a one page app word game.
- You will need to implement data binding.

### User experience :
Here is the user flow:
(1) The user chooses the max number of letters (up to 10)
(2) The user picks word category using checkboxes.
       (animals, vehicles, food).
(3) The user clicks "scramble" button.
(4) The user sees the scramble.
(5) Then user types the word they think it is.
(6) User clicks submit and feedback  correct / wrong is replied.
(7) If correct then input field resets and submit disabled.
(8) If wrong can retype or click show answer. 

### Overview of the included DataService :
- The DataService component is located in 'src/core/services'.
- This service includes 3 lists of words and several methods.
-
- The method enables you to filter a specific list with words of given length or less.
- - You need to inject the service into your module.
- - Then you can access one of the 3 lists, 
- - - Example-1 : const animalList = this.dataService.animals will return a list with animal words.
- - - Example-2 : this.dataService.getByLength(animalList, 3); will return a filtered list with only words 3 letters or less.


### Page design
- The interface resembles a form (but dont use angular form tools).
- Here is an illustration of the page design:
- ![image](https://github.com/SpeedCodeNpo/ng-exercises/assets/132397719/0a4cf87e-a5aa-4ff2-96d4-b24e6f121004)

### Assignment hint :
- Use event binding for the checkboxes

### Solution for this assignment:
- The solution branch can be found using this link:
- GitHub:  https://github.com/SpeedCodeNpo/ng-exercises/tree/card-20230526-1133-s
