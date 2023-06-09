import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-play',
  templateUrl: './pipe-play.component.html',
  styleUrls: ['./pipe-play.component.scss'],
})
export class PipePlayComponent {
  myCustomerName = '';
  myDate = '';
  myMoneyAmount = 0;
  myDistance = 0;

  onMyInput(inputName: string) {
    this.myCustomerName = inputName;
  }

  onMyDate(inputDate: string) {
    this.myDate = inputDate;
  }

  onMyCurrency(inputMoneyAmount: string) {
    this.myMoneyAmount = parseInt(inputMoneyAmount);
  }

  onMyDistance(inputDistanceMiles: string) {
    this.myDistance = parseInt(inputDistanceMiles);
  }
}
