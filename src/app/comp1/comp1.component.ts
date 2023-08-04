import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss'],
})
export class Comp1Component {
  ngOnInit() {
    const doNothingObservable$ = new Observable((a) => {
      console.log('Executed doNothingObservable$');
    });

    console.log('Before subscribing');
    const doNothingSubscriptio = doNothingObservable$.subscribe();
    console.log('After  subscribing');
  }
}
