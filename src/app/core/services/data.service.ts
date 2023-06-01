import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  dzCards = [
    {
      titleName: 'Goku',
      titleHp: 1000,
      imageUrl:
        'https://stackblitz.com/files/ng-exercise1/github/SpeedCodeNpo/ng-exercises/card-20230531-1715-q/src/assets/files/1_goku_1000.png',
      power1Name: 'Spirit Bomb',
      power1Points: 3000,
      power2Name: 'Kioken Finish',
      power2Points: 550,
      power3Name: 'Kamehameha',
      power3Points: 400,
    },
    {
      titleName: 'Goku',
      titleHp: 330,
      imageUrl:
        'https://stackblitz.com/files/ng-exercise1/github/SpeedCodeNpo/ng-exercises/card-20230531-1715-q/src/assets/files/2_goku_330.png',
      power1Name: 'Super Kamehameha',
      power1Points: 400,
      power2Name: 'Kamehameha',
      power2Points: 150,
      power3Name: 'High Speed Rush',
      power3Points: 100,
    },
    {
      titleName: 'Kid Goku',
      titleHp: 180,
      imageUrl:
        'https://stackblitz.com/files/ng-exercise1/github/SpeedCodeNpo/ng-exercises/card-20230531-1715-q/src/assets/files/3_kid_goku_180.png',
      power1Name: 'Kamehameha',
      power1Points: 100,
      power2Name: 'Power Pole Extend',
      power2Points: 80,
      power3Name: 'Hand Gestures',
      power3Points: 60,
    },
    {
      titleName: 'Son Goku',
      titleHp: 150,
      imageUrl:
        'https://stackblitz.com/files/ng-exercise1/github/SpeedCodeNpo/ng-exercises/card-20230531-1715-q/src/assets/files/4_son_goku_150.png',
      power1Name: 'Meteor Crash',
      power1Points: 30,
      power2Name: 'Kamehameha',
      power2Points: 50,
      power3Name: 'Spirit Bomb',
      power3Points: 100,
    },
    {
      titleName: 'God Goku',
      titleHp: 200,
      imageUrl:
        'https://stackblitz.com/files/ng-exercise1/github/SpeedCodeNpo/ng-exercises/card-20230531-1715-q/src/assets/files/5_god_goku_200.png',
      power1Name: 'Akiras Blessing',
      power1Points: 10,
      power2Name: 'Main Protagonist',
      power2Points: 30,
      power3Name: 'Aurora Stream',
      power3Points: 40,
    },
  ];

  /**
   * Input an array of items
   * Returns the same array (same refrence) but the items inside are shuffled.
   */
  shuffle(items: any[]) {
    let index = items.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (index != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * index);
      index--;

      // And swap it with the current element.
      //We use a destructuring assignment, it allows you to unpack the values from an array into multiple variables.
      // In this case, the destructuring assignment is unpacking the values from the array [items[index], items[randomIndex]] into the variables items[index] and items[randomIndex].
      // This is like [ a , b ] = [1 ,2]; It means that variable a will get the value 1 and variable b will get the value 2. Like a = 1 and b=2.
      [items[index], items[randomIndex]] = [items[randomIndex], items[index]];
      // console.log(`index[${index}] randomIndex  = ${randomIndex}`);
    }

    return items;
  } //shuffle

  /**
   * This function will deal the deck of cards and
   * return the number of cards requested.
   *
   * It will first verify input value. Only allows in range
   * of 2 up to the number of cards in the deck.
   *
   * Then it shuffles all the deck cards.
   * Finally it returns only the number of cards requested.
   */
  dealCards(quantity: number) {
    //Setup
    const cardsToShuffle = this.dzCards.slice(); //make a copy of original
    const deckLength = cardsToShuffle.length;

    //Step 1 : first verify the input request
    // console.log(`deckLength = ${deckLength}`);
    // console.log(`requested quantity ${quantity} cards`);

    if (quantity < 2 || quantity > deckLength) {
      quantity = deckLength; //fallsback to default which return all cards
    }

    //Step 2 : shuffle all the cards in the deck
    const dealtCards = this.shuffle(cardsToShuffle);
    // console.log(
    //   `shuffeled dzCards got dealtCards with ${dealtCards.length} cards inside, expected to always be deckLength cards.`
    // );

    //Step 3 : from the shuffled deck we take the first ones
    //         by requested quantity.
    dealtCards.splice(0, deckLength - quantity);
    // console.log(
    //   `spliced dealtCards now it has ${dealtCards.length} cards inside, expected to always be quantity requested`
    // );
    // console.log(`dealtCards[]= ${JSON.stringify(dealtCards)}`);

    //We use slice() because it creates a new rference copy
    // In other words it returns a brand new array that has identical items as
    // the 'dealtCards' array.
    return dealtCards.slice();
  } //dealCards
}
