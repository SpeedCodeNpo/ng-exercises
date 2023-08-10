import { Component } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss'],
})
export class Comp1Component {
  asyncEmissionTimeMillisec = 2000;
  isNeverEnding: boolean = false;
  isActivateComplete: boolean = true;
}
