import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-play',
  templateUrl: './pipe-play.component.html',
  styleUrls: ['./pipe-play.component.scss']
})
export class PipePlayComponent {

  myCustomerName = '';

  onMyInput(inputName: string){
    this.myCustomerName = inputName;
  }
}
