import { Component, inject } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.scss'],
})
export class CardPageComponent {
  dataService = inject(DataService);
  activeCards = [this.dataService.dzCards[0]];
  quantityOfCardsRequested = this.dataService.dzCards.length;

  onDealCards() {
    this.activeCards = this.dataService.dealCards(
      this.quantityOfCardsRequested
    );
  }
}
