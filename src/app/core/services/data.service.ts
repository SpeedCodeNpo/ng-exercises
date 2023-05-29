import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  //animals, vehicles, food

  animals = [
    'mouse',
    'bird',
    'fish',
    'elephant',
    'rabbit',
    'horse',
  ];

  vehicals = [
    'truck',
    'motorcycle',
    'bicycle',
    'ship',
    'train',
    'boat',
    'rocket',
    'submarine',
  ];

  food = [
    'apple',
    'banana',
    'grapes',
    'orange',
    'carrot',
    'potato',
    'tomato',
    'pepper',
    'onion',
    'bread',
    'cake',
    'cookies',
    'pizza',
    'pasta',
    'soup',
    'pretzel',
    'chicken',
    'hamburger',
    'steak',
    'cheese',
    'sandwich',
  ];

  getByLength(wordList: string[], wordLength: number): string[] {
    const filteredList = wordList.filter((word) => word.length <= wordLength);
    return filteredList;
  }

  getOneByLength(wordList: string[], wordLength: number): string {
    const listOfWords = this.getByLength(wordList, wordLength);

    if (listOfWords) {
      const lengthOflistOfWords = listOfWords.length;

      const randomIndex = Math.floor(Math.random() * lengthOflistOfWords);

      return listOfWords[randomIndex];
    }

    return '';
  }

  scrambleThisWord(inputWord: string): string{

    // Create an array of the letters in the word.
    const letters = Array.from(inputWord);
  
    // Shuffle the letters in the array.
    letters.sort(() => Math.random() - 0.5);
  
    // Return the scrambled word.
    return letters.join('');
  }
}
