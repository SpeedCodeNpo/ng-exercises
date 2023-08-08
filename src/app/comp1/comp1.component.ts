import { Component } from '@angular/core';
import { Observable, Observer, TeardownLogic } from 'rxjs';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss'],
})
export class Comp1Component {
  isActivateComplete: boolean = false;

  mySubscribeFunction(someObserver: Observer<number>) {
    console.log('Executing the mySubscribeFunction()');
    someObserver.next(1);

    console.log(
      `Value of this.isActivateComplete is : "${this.isActivateComplete}"`
    );
    if (this.isActivateComplete) {
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
    // const myObservable$ = new Observable(this.mySubscribeFunction);

    // myObservable$.subscribe(this.myObserver);
    this.mySubscribeFunction(this.myObserver);
  } //ngOnInit
}
