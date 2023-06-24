import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  // @Input() parentMessage = '';
  myTest = 'Hello';

  isNgOnChanges = false;
  isNgOnInit = false;
  isNgDoCheck = false;
  isNgOnDestroy = false;

  ngOnChanges() {
    console.log('Activated: ngOnChanges');
    this.isNgOnChanges = true;
  }
  ngOnInit() {
    console.log('Activated: ngOnInit');
    this.isNgOnInit = true;
  }
  ngDoCheck() {
    console.log('Activated: ngDoCheck');
    this.isNgDoCheck = true;
  }

  ngOnDestroy() {
    console.log('Activated: ngOnDestroy');
    this.isNgOnDestroy = true;
  }
}
