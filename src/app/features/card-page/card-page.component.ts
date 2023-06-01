import { Component, inject } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.scss'],
})
export class CardPageComponent {
  dataService = inject(DataService);
  quantityOfCardsRequested = this.dataService.dzCards.length;
  // activeCards = [this.dataService.dzCards[0]];
  activeCards = this.dataService.dealCards(this.quantityOfCardsRequested);

  onDealCards() {
    this.activeCards = this.dataService.dealCards(
      this.quantityOfCardsRequested
    );
  }
}
