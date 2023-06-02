## Ng Exercises

Welcome to Speed Code Exercises
Solution for assignment: card-20230531-1715

### Practice goals :

Practice using binding

## Links to card-20230526-1133-s

- GitHub branch link: https://github.com/SpeedCodeNpo/ng-exercises/tree/card-20230531-1715-s
- Stackblitz shared link: https://stackblitz.com/edit/ng-exercise1-zj94dc?file=README.md
-
- GitHub instructions starter branch link: https://github.com/SpeedCodeNpo/ng-exercises/tree/card-20230531-1715-q

### Assignment title :

Display dealt cards from a "Dragon Ball Z" card deck.

### Assignment instructions :

- As a starting point you are given a service (in the 'core' module).
- This service has the data, a list of game cards and 'dealCards(number)' function.
- The function will return to you a shuffled number of cards from the deck.
-
- Your assignment is to display those cards and the UI for user to set number of cards and deal cards button.

### Page design

- When app starts the display shows all deck of cards, every click on DEAL CARDS causes cards to shuffle:
  ![image](https://github.com/SpeedCodeNpo/ng-exercises/assets/132397719/5677ccee-af70-43e1-b11b-2cfed9454c1f)

- After user updates number of cards and clicks the DEAL Cards button then that amount of cards are dealt & displayed :
  ![image](https://github.com/SpeedCodeNpo/ng-exercises/assets/132397719/b0311978-e309-4a1f-b0d9-00d66131ea58)

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
