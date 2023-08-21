import { Component, Input, OnInit, inject } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { HttpService } from '../http-service/http-service.service';
import { UserInterface } from '../interface/user';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss'],
})
export class Comp1Component implements OnInit {
  isGetUserActive = true;
  userFullName = 'No User';
  userFound!: UserInterface | null;
  httpService = inject(HttpService);
  getUserSubscription = new Subscription();

  //=============================================
  // Functions
  //=============================================

  /**
   * Function to get user data
   */
  onClickGetUser() {
    const myUser = this.httpService.getUser();
    this.isGetUserActive = false;
    this.getUserSubscription = myUser.subscribe({
      next: (response) => {
        this.isGetUserActive = true;
        this.userFound = response;
        console.log(`...... GOT A USER  .....`);
        const firstUser = response.results[0];
        this.userFullName = `${firstUser.name.title} ${firstUser.name.first} ${firstUser.name.last}`;
        console.log(`>> The user is : ${this.userFullName}`);
        return response;
      },

      error: () => {
        console.log('.......... Error in getUser');
        this.userFound = null;
      },
    });
  } //onClickGetUser

  ngOnInit() {
    console.log('======== START ngOnInit  ==========');
  }

  ngOnDestroy() {
    this.getUserSubscription.unsubscribe();
  }
} //end comp1
