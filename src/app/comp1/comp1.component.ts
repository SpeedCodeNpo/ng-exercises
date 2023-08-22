import { Component, Input, OnInit, inject } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss'],
})
export class Comp1Component implements OnInit {
  isGetUserActive = true;
  userFullName = 'No User';

  //=============================================
  // Functions
  //=============================================

  /**
   * Function to get user data
   */
  onClickGetUser() {} //onClickGetUser

  ngOnInit() {
    console.log('======== START ngOnInit  ==========');
  }

  ngOnDestroy() {
    console.log('======== Unsubscribed  ==========');
  }
} //end comp1
