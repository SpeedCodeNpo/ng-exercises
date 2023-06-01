import { Component, inject } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.scss'],
})
export class CardPageComponent {
  dataService = inject(DataService);
  activeCards = this.dataService.dealCards(0);
  requestedCards = 0;

  onDealCards() {
    if (this.requestedCards < 1 || this.requestedCards > 5) {
      this.requestedCards = 5;
    }
    this.activeCards = this.dataService.dealCards(this.requestedCards);
    console.log(
      `Items in this.activeCards are = ${JSON.stringify(this.activeCards)}`
    );
  }
}
