import { Component } from '@angular/core';
import { Observable, Observer, TeardownLogic } from 'rxjs';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss'],
})
export class Comp1Component {
  isActivateComplete: boolean = false;
  asyncEmissionTimeMillisec = 2000;

  mySubscribeFunction(
    someObserver: Observer<number>,
    actiavteComplete: boolean,
    emissionTimeout: number
  ) {
    console.log('Executing the mySubscribeFunction()');
    someObserver.next(1);

    setTimeout(() => someObserver.next(2), emissionTimeout);
    setTimeout(() => someObserver.next(3), 2 * emissionTimeout);

    console.log(`Value of this.isActivateComplete is : "${actiavteComplete}"`);
    if (actiavteComplete) {
      someObserver.complete();
    } else {
      someObserver.error(new Error(`Ending subscription with an error.`));
    }

    return () => {
      console.log('Executing the teardown.');
    };
  }

  myObserver1 = {
    next: (value: number) => console.log(`Value of the emission is "${value}"`),
    complete: () => console.log(`Triggered a COMPLETE.`),
    error: (myError: Error) =>
      console.log(`Triggered an error, the message is : "${myError}"`),
  };

  myObserver2 = {
    next: (value: number) =>
      console.log(`Observer2: Value of the emission is "${value}"`),
    complete: () => console.log(`Observer2: Triggered a COMPLETE.`),
    error: (myError: Error) =>
      console.log(
        `Observer2: Triggered an error, the message is : "${myError}"`
      ),
  };

  ////////////////////////////

  ngOnInit() {
    console.log(
      '===== ngOnInit : Creating a new Observable instance : myObservable$, this will already activate it.'
    );
    const myObservable1$ = new Observable(
      this.mySubscribeFunction(
        this.myObserver1,
        this.isActivateComplete,
        this.asyncEmissionTimeMillisec
      )
    );

    const myObservable2$ = new Observable(
      this.mySubscribeFunction(
        this.myObserver2,
        this.isActivateComplete,
        this.asyncEmissionTimeMillisec
      )
    );

    // console.log(
    //   '===== ngOnInit : Subscribing to myObservable$, creating variable mySubscription.'
    // );
    // const mySubscription = myObservable$.subscribe();

    // mySubscription.unsubscribe();
    // console.log('===== ngOnInit : Unsubscribed from mySubscription.');
    //this.mySubscribeFunction(this.myObserver);
  } //ngOnInit
}
