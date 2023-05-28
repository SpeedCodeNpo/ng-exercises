import { Component, inject } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-scramble-game',
  templateUrl: './scramble-game.component.html',
  styleUrls: ['./scramble-game.component.scss'],
})
export class ScrambleGameComponent {
  dataService: DataService;
  maxWordLength: number = 0;
  useAnimals = false;
  useVehicals = false;
  useFoods = false;

  constructor() {
    this.dataService = inject(DataService);
  }

  ngOnInit() {
    // Tיhe following is an example of how to use the DataService:
    // console.log(this.dataService.animals);
    // const myList = this.dataService.getByLength(this.dataService.animals, 3);
    // console.log(myList);
  }

  onInputLength(myInput: string) {
    // The logic here is that if the input has non-numeric characters then the
    // 'maxWordLength' is set to zero , otherwise it is set to the number being inputed.
    //console.log(myInput);

    const listOfChars = myInput.split('');
    // console.log(listOfChars);

    const isOnlyNumerals = !listOfChars.some((char) => isNaN(parseInt(char)));
    //console.log(isOnlyNumerals);

    isOnlyNumerals
      ? (this.maxWordLength = parseInt(myInput))
      : (this.maxWordLength = 0);

    console.log(this.maxWordLength);
  }

  onUseAnimals() {
    this.useAnimals = !this.useAnimals;
    console.log('Animals : ' + this.useAnimals);
  }

  onUseVehicals() {
    this.useVehicals = !this.useVehicals;
    console.log('Vehicals : ' + this.useVehicals);
  }

  onUseFoods() {
    this.useFoods = !this.useFoods;
    console.log('Foods : ' + this.useFoods);
  }

  onScrambleWord() {
    //==== Step 1: Create a list of the potential words
    // console.log(this.dataService.animals);
    let listOfChosenWords: string[] = [];

    if (this.useAnimals) {
      listOfChosenWords.push(...this.dataService.animals);
    }
    if (this.useVehicals) {
      listOfChosenWords.push(...this.dataService.vehicals);
    }
    if (this.useFoods) {
      listOfChosenWords.push(...this.dataService.food);
    }
    console.log(listOfChosenWords);

    //==== Step 2: From the list get only words that are <= max length
    const chosenWord: string = this.dataService.getOneByLength(
      listOfChosenWords,
      this.maxWordLength
    );
    console.log(chosenWord);
  }

  onShowAnswer() {}
}
