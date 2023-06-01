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
  quantityOfCardsToDeal = 0;

  onDealCards() {
    this.activeCards = this.dataService.dealCards(this.quantityOfCardsToDeal);
    console.log(
      `Items in this.activeCards are = ${JSON.stringify(this.activeCards)}`
    );
  }

  onEnterQuantity(quantity: string) {
    console.log(`Input quantity = ${quantity}`);

    const numQuantity = parseInt(quantity);

    if (numQuantity < 1 || numQuantity > 5) {
      this.quantityOfCardsToDeal = 5;
      
      console.log('Illegal quantity, defaulting to 5 cards.');
    } else {
      this.quantityOfCardsToDeal = numQuantity;
    }
  }
}
