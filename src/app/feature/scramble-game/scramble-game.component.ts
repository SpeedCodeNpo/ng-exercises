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

  onScrambleWord() {
    console.log(`input length is : ${this.maxWordLength}`);
  }

  onShowAnswer() {}
}
