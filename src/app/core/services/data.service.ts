import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  dzCards = [
    {
      titleName: 'Goku',
      titleHp: 1000,
      imageUrl: 'https://stackblitz.com/edit/ng-exercise1?file=src%2Fapp%2Fcore%2Fservices%2Fdata.service.ts,src%2Fassets%2Ffiles%2F1_goku_1000.png',
      power1Name: 'Spirit Bomb',
      power1Points: 400,
      power2Name: 'Spirit Bomb',
      power2Points: 550,
      power3Name: 'Spirit Bomb',
      power3Points: 100,
    },
    {
      titleName: 'Goku',
      titleHp: 1000,
      imageUrl: 'https://stackblitz.com/edit/ng-exercise1?file=src%2Fapp%2Fcore%2Fservices%2Fdata.service.ts,src%2Fassets%2Ffiles%2F2_goku_330.png',
      power1Name: 'Spirit Bomb',
      power1Points: 400,
      power2Name: 'Spirit Bomb',
      power2Points: 550,
      power3Name: 'Spirit Bomb',
      power3Points: 100,
    },
    {
      titleName: 'Kid Goku',
      titleHp: 1000,
      imageUrl: 'https://stackblitz.com/edit/ng-exercise1?file=src%2Fapp%2Fcore%2Fservices%2Fdata.service.ts,src%2Fassets%2Ffiles%2F3_kid_goku_180.png',
      power1Name: 'Spirit Bomb',
      power1Points: 400,
      power2Name: 'Spirit Bomb',
      power2Points: 550,
      power3Name: 'Spirit Bomb',
      power3Points: 100,
    },
    {
      titleName: 'Son Goku',
      titleHp: 1000,
      imageUrl: 'https://stackblitz.com/edit/ng-exercise1?file=src%2Fapp%2Fcore%2Fservices%2Fdata.service.ts,src%2Fassets%2Ffiles%2F4_son_goku_150.png',
      power1Name: 'Spirit Bomb',
      power1Points: 400,
      power2Name: 'Spirit Bomb',
      power2Points: 550,
      power3Name: 'Spirit Bomb',
      power3Points: 100,
    },
    {
      titleName: 'God Goku',
      titleHp: 1000,
      imageUrl: 'https://stackblitz.com/edit/ng-exercise1?file=src%2Fapp%2Fcore%2Fservices%2Fdata.service.ts,src%2Fassets%2Ffiles%2F5_god_goku_200.png',
      power1Name: 'Spirit Bomb',
      power1Points: 400,
      power2Name: 'Spirit Bomb',
      power2Points: 550,
      power3Name: 'Spirit Bomb',
      power3Points: 100,
    }
  ]


}
