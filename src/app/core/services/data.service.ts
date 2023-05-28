import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  //animals, vehicles, food

  animals = [
    'cat',
    'dog',
    'mouse',
    'bird',
    'fish',
    'elephant',
    'cow',
    'pig',
    'rabbit',
    'horse',
  ];

  vehicals = [
    'car',
    'truck',
    'bus',
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
    const listOfWords = this.getByLength(wordList , wordLength);

    const lengthOflistOfWords = listOfWords.length;

    const randomIndex = Math.floor(Math.random() * lengthOflistOfWords);
  
    return listOfWords[randomIndex];

  }

}
