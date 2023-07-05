import { Component } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss'],
})
export class Comp1Component {
  keyName = '';
  keyValue = '';

  saveData() {
    let key = 'myKey';
    let value = 'myValue';
    localStorage.setItem(key, value);
  }

  setInLocalStorage() {
    const nameToSet = this.keyName ? this.keyName : 'noKeyName';
    const valueToSet = this.keyValue ? this.keyValue : 'noKeyValue';

    localStorage.setItem(nameToSet, valueToSet);
  }
}
