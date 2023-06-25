import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss'],
})
export class HomeComponent {
  @Input() incomingMessage = '';
  anyInput = '';

  isDestroyActive = true;

  isNgOnChanges = false;
  isNgOnInit = false;
  isNgDoCheck = false;
  isNgOnDestroy = false;
  ngDoCheckCounter = 0;

  ngOnChanges() {
    console.log(
      'ngOnChanges : Was triggered, this means that before the display is rendered, it received data-bound input.'
    );
    this.isNgOnChanges = true;
  }
  ngOnInit() {
    console.log(
      'ngOnInit : Was triggered , this means that ANgular finished rendering the display with the data-bound properties and set the components input propeties. '
    );
    this.isNgOnInit = true;
  }
  ngDoCheck() {
    console.log(
      'ngDoCheck : Was triggered, this happens every tme any change happens.'
    );
    this.isNgDoCheck = true;
    this.ngDoCheckCounter++;
  }

  ngOnDestroy() {
    console.log('=== === [home.component] ngOnDestroy was triggered.');
    this.isNgOnDestroy = true;
  }

  toggleDestroyFlag() {
    this.isDestroyActive = !this.isDestroyActive;
    // this.ngOnDestroy();
    console.log(
      `isDestroyActive updated, it's new value is now = ${this.isDestroyActive}`
    );
  }
}
