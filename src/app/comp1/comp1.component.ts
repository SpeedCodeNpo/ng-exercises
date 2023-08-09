import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss'],
})
export class Comp1Component {
  asyncEmissionTimeMillisec = 2000;
  isNeverEnding: boolean = true;
  isActivateComplete: boolean = true;

  ////////////////////////////

  ngOnInit() {
    console.log(
      '===== ngOnInit : Creating a new Observable instance : myObservable$.'
    );

    ////////////////////

    const myObservable$ = new Observable((mySubscriber) => {
      console.log('myObservable$: Executing the creation of myObservable$');
      mySubscriber.next(1);

      setTimeout(() => mySubscriber.next(2), this.asyncEmissionTimeMillisec);
      setTimeout(
        () => mySubscriber.next(3),
        3 * this.asyncEmissionTimeMillisec
      );

      if (!this.isNeverEnding) {
        if (this.isActivateComplete) {
          mySubscriber.complete();
        } else {
          mySubscriber.error(
            new Error(`myObservable$: Ending subscription with an error.`)
          );
        }
      }

      return () => {
        console.log('myObservable$: Executing the teardown.');
      };
    });

    //////////////////////////////////////

    console.log(
      '===== ngOnInit : BEFORE subscribing to myObservable$, creating variable mySubscription.'
    );

    /////////////////////////

    const mySubscription = myObservable$.subscribe({
      next: (value) =>
        console.log(`Observer: Value of the emission is "${value}"`),

      complete: () => console.log(`Observer1: Triggered a COMPLETE.`),

      error: (myError: Error) =>
        console.log(
          `Observer: Triggered an error, the message is : "${myError}"`
        ),
    });

    /////////////////////////

    console.log('===== ngOnInit : AFTER subscribing to myObservable$.');

    /////////////////

    setTimeout(() => {
      console.log(
        '===== ngOnInit : Triggering unsubscribe from mySubscription.'
      );
      mySubscription.unsubscribe();
      console.log('===== ngOnInit : AFTER Unsubscribed from mySubscription.');
    }, 4 * this.asyncEmissionTimeMillisec);
  } //ngOnInit
}
