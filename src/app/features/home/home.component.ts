import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  // @Input() parentMessage = '';
  isDestroyActive = false;

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
    console.log('ngDoCheck : Change was detected ');
    this.isNgDoCheck = true;
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
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
