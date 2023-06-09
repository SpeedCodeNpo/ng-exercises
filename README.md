## Ng Exercises

Welcome to Speed Code Exercises
Instructions for assignment: card-20230609-1300

### Practice goals :

Practice using piping

## Links to card-20230526-1133-q

- GitHub branch link: https://github.com/SpeedCodeNpo/ng-exercises/tree/card-20230609-1300-q
- Stackblitz shared link:
-
- GitHub solution link: https://github.com/SpeedCodeNpo/ng-exercises/tree/card-20230609-1300-s

### Assignment title :

Create a piping playground.

### Assignment instructions :

- This app displays multiple input options and uses different pipes to convert the inputs.
- The pipes to implement in this assignment are :
- Title Case
- Upper Case
- Decimal
- Date
- Currency
- Custom Pipe

### Page design

- The page displays a list of div blocks, each dedicated to its own pipe implementation
- Here is an example screen shot of the page to create:

### User experience :

Here is the user flow:
(1) The user chooses the number of cards to deal.
(2) The user clicks on DEAL CARDS button.
(3) The app displays the randomly shuffled and dealt cards.
(4) Subsequent clicks on the button will reshuffle the same amount of cards.

### Overview of the included DataService :

- The DataService component is located in 'src/core/services'.
- This service includes a list of cards and several methods.

### Assignment hint :

- Use event binding for the checkboxes
- use \*ngFor to display the array of cards
