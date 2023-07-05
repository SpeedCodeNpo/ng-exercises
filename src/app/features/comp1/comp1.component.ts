import { Component } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss'],
})
export class Comp1Component {
  keyName = '';
  keyValue = '';
  storageContentList: {}[] = [];

  setInLocalStorage() {
    const nameToSet = this.keyName ? this.keyName : 'noKeyName';
    const valueToSet = this.keyValue ? this.keyValue : 'noKeyValue';

    localStorage.setItem(nameToSet, valueToSet);
    this.storageContentList.push({ nameToSet, valueToSet });
  }

  getStorageContent() {
    //We first clean up our current content list
    this.storageContentList = [];

    //Loop through all the keys and get each one's value
    let keys = Object.keys(localStorage);
    for (let key of keys) {
      let value = localStorage.getItem(key);
      if (!value) {
        value = 'no-value';
      }

      //Now adding the key & va;ue into the array.
      this.storageContentList.push({ key: value });
      console.log('+ ');
    }

    if (this.storageContentList.length === 0) {
      console.log('-------- empty');
    }
    for (let item of this.storageContentList) {
      console.log('+ ' + JSON.stringify(item));
    }
  }

  clearAllLocalStorage() {
    localStorage.clear();
    this.keyName = '';
    this.keyValue = '';
    this.storageContentList = [];
  }
}
