import { Component, OnInit, inject } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { HttpService } from '../http-service/http-service.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss'],
})
export class Comp1Component implements OnInit {
  httpService = inject(HttpService);

  constructor() {
    this.httpService.getUser().subscribe((response) => {
      console.log(
        `email is : "${response.results[0].email}"\n gender is : ${response.results[0].gender}`
      );
    });
  }

  //=============================================
  // Functions
  //=============================================

  /**
   * Function to get user data
   */
  onClickGetUser() {}

  ngOnInit() {
    // const myImage = this.httpService.getUser();
  }
} //end comp1
