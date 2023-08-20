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
  userFound!: UserInterface | null;
  httpService = inject(HttpService);

  constructor() {}

  //=============================================
  // Functions
  //=============================================

  /**
   * Function to get user data
   */
  onClickGetUser() {}

  ngOnInit() {
    console.log('======== START ngOnInit  ==========');

    const myUser = this.httpService.getUser();
    myUser.subscribe({
      next: (response) => {
        this.userFound = response;
        console.log('...... GOT A USER  .....');
        const firstUser = response.results[0];
        console.log(
          `>> email is : "${firstUser.email}"\n>> gender is : ${firstUser.gender}`
        );
        return response;
      },

      error: () => {
        console.log('.......... Error in getUser');
        this.userFound = null;
      },
    });

    console.log(`..THEIR VALUE IS : ${myUser}`);

    //   if (myUser !== null) {
    //     console.log('======== GOT A USER ==========');
    //     const firstUser = myUser.results[0];
    //     console.log(
    //       `email is : "${firstUser.email}"\n gender is : ${firstUser.gender}`
    //     );
    //     console.log('======== FINISHED CONSOLE LOG EMAIL & GENDER ==========');
    //   } else {
    //     console.log('======== GOT A NULL ==========');
    //   }
    // }
  }
} //end comp1
