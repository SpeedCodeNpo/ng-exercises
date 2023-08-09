import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss'],
})
export class Comp1Component {
  isActivateComplete: boolean = true;
  asyncEmissionTimeMillisec = 2000;

  ////////////////////////////

  ngOnInit() {
    console.log(
      '===== ngOnInit : Creating a new Observable instance : myObservable$.'
    );

    const myObservable$ = new Observable((mySubscriber) => {
      console.log('myObservable$: Executing the creation of myObservable$');
      mySubscriber.next(1);

      setTimeout(() => mySubscriber.next(2), this.asyncEmissionTimeMillisec);
      setTimeout(
        () => mySubscriber.next(3),
        2 * this.asyncEmissionTimeMillisec
      );

      // console.log(
      //   `myObservable$: Value of this.isActivateComplete is : "${this.isActivateComplete}"`
      // );
      if (this.isActivateComplete) {
        mySubscriber.complete();
      } else {
        mySubscriber.error(
          new Error(`myObservable$: Ending subscription with an error.`)
        );
      }

      return () => {
        console.log('myObservable$: Executing the teardown.');
      };
    });

    //////////////////////////////////////

    console.log(
      '===== ngOnInit : BEFORE subscribing to myObservable$, creating variable mySubscription.'
    );

    const mySubscription1 = myObservable$.subscribe({
      next: (value) =>
        console.log(`Observer1: Value of the emission is "${value}"`),

      complete: () => console.log(`Observer1: Triggered a COMPLETE.`),

      error: (myError: Error) =>
        console.log(
          `Observer1: Triggered an error, the message is : "${myError}"`
        ),
    });
    console.log('===== ngOnInit : AFTER subscribing to myObservable$.');

    // const mySubscription2 = myObservable$.subscribe({
    //   next: (value) =>
    //     console.log(`Observer2: Value of the emission is "${value}"`),

    //   complete: () => console.log(`Observer2: Triggered a COMPLETE.`),

    //   error: (myError: Error) =>
    //     console.log(
    //       `Observer2: Triggered an error, the message is : "${myError}"`
    //     ),
    // });

    // console.log('===== ngOnInit : BEFORE unsubscribing from mySubscription1.');
    // setTimeout(
    //   () => mySubscription1.unsubscribe(),
    //   3 * this.asyncEmissionTimeMillisec
    // );
    // // mySubscription1.unsubscribe();
    // console.log('===== ngOnInit : AFTER Unsubscribed from mySubscription1.');
  } //ngOnInit
}
