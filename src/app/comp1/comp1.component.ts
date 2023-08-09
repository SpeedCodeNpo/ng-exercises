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

  myObserver = {
    next: (value: number) => console.log(`Value of the emission is "${value}"`),
    complete: () => console.log(`Triggered a COMPLETE.`),
    error: (myError: Error) =>
      console.log(`Triggered an error, the message is : "${myError}"`),
  };

  ngOnInit() {
    console.log(
      '===== ngOnInit : Creating a new Observable instance : myObservable$, this will already activate it.'
    );
    const myObservable$ = new Observable(
      this.mySubscribeFunction(
        this.myObserver,
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
