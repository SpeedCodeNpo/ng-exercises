import { Component } from '@angular/core';
import { CryptoStorage } from '@webcrypto/storage';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss'],
})
export class Comp1Component {
  requestedKeyName = '';
  requestedKeyValue = '';
  //storageContentList: {}[] = [];
  numberOfKeysInStorage = Object.keys(localStorage).length;

  setInLocalStorage() {
    const nameToSet = this.requestedKeyName
      ? this.requestedKeyName
      : 'noKeyName';
    const valueToSet = this.requestedKeyValue
      ? this.requestedKeyValue
      : 'noKeyValue';

    localStorage.setItem(nameToSet, valueToSet);
  }

  getValueOfKey() {
    //let keys = Object.keys(localStorage);
    const value = localStorage.getItem(this.requestedKeyName);
    if (!value) {
      this.requestedKeyValue = 'no-value';
    } else {
      this.requestedKeyValue = value;
    }
  }

  removeKeyValue() {
    localStorage.removeItem(this.requestedKeyName);
    this.requestedKeyName = '';
    this.requestedKeyValue = '';
  }

  clearAllLocalStorage() {
    localStorage.clear();
    this.requestedKeyName = '';
    this.requestedKeyValue = '';
  }
}
