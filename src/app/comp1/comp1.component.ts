import { Component } from '@angular/core';
import { Observable, Observer, TeardownLogic } from 'rxjs';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss'],
})
export class Comp1Component {
  ngOnInit() {
    const myObservable$ = new Observable(this.mySubscribeFunction);

    myObservable$.subscribe(this.myObserver);
  } //ngOnInit

  mySubscribeFunction(someObserver: Observer<number>) {
    console.log('Executing the mySubscribeFunction()');
    someObserver.next(1);
    someObserver.complete();
    someObserver.error(new Error(`Testing error emission.`));
    return () => {
      console.log('Return teardown try');
    };
  }

  myObserver = {
    next: (value: number) => console.log(`The emission value is ${value}`),
    complete: () => console.log(`Triggered a COMPLETE.`),
    error: (myError: Error) => console.log(`Error received is ${myError}`),
  };
}
