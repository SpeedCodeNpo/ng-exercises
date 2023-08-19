import { Component, OnInit, inject } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { HttpService } from '../http-service/http-service.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss'],
})
export class Comp1Component implements OnInit{
  httpService = inject(HttpService);

  constructor () {
    this.httpService.getImage().subscribe( response => {
      console.log(response);
    })
  }

  //=============================================
  // Functions
  //=============================================

  /**
   * Function to get the generated image
   */
  onGenerateImage() {
    
  }

  ngOnInit () {
    const myImage = this.httpService.getImage();
  }
} //end comp1
