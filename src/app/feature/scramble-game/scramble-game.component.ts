import { Component, inject } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-scramble-game',
  templateUrl: './scramble-game.component.html',
  styleUrls: ['./scramble-game.component.scss'],
})
export class ScrambleGameComponent {
  dataService: DataService;

  constructor() {
    this.dataService = inject(DataService);
  }

  ngOnInit() {
    // Tיhe following is an example of how to use the DataService:
    console.log(this.dataService.animals);
    const myList = this.dataService.getByLength(this.dataService.animals, 3);
    console.log(myList);
  }
}
