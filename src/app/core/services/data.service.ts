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
      power1Points: 3000,
      power2Name: 'Kioken Finish',
      power2Points: 550,
      power3Name: 'Kamehameha',
      power3Points: 400,
    },
    {
      titleName: 'Goku',
      titleHp: 330,
      imageUrl: 'https://stackblitz.com/edit/ng-exercise1?file=src%2Fapp%2Fcore%2Fservices%2Fdata.service.ts,src%2Fassets%2Ffiles%2F2_goku_330.png',
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
      imageUrl: 'https://stackblitz.com/edit/ng-exercise1?file=src%2Fapp%2Fcore%2Fservices%2Fdata.service.ts,src%2Fassets%2Ffiles%2F3_kid_goku_180.png',
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
      imageUrl: 'https://stackblitz.com/edit/ng-exercise1?file=src%2Fapp%2Fcore%2Fservices%2Fdata.service.ts,src%2Fassets%2Ffiles%2F4_son_goku_150.png',
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
      imageUrl: 'https://stackblitz.com/edit/ng-exercise1?file=src%2Fapp%2Fcore%2Fservices%2Fdata.service.ts,src%2Fassets%2Ffiles%2F5_god_goku_200.png',
      power1Name: 'Akiras Blessing',
      power1Points: 10,
      power2Name: 'Main Protagonist',
      power2Points: 10,
      power3Name: 'Aurora Stream',
      power3Points: 40,
    }
  ]


}
