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

  cryptoStore = new CryptoStorage('my crypto key');

  async storeCrypto() {
    // Secure store your data locally fully encrypted
    const originalValue = 'any data value';
    await this.cryptoStore.set('baba', originalValue);
    await this.cryptoStore.set('data key3', 'la la la');
    console.log('data was encrypted');
    // Look at the browser dev tools from IndexedDb,
    // you will not be able to read the data key or value.
  }
  async decryptCrypto() {
    // Then, retrieve your original data decrypted again:
    const decryptedValue = await this.cryptoStore.get('data key');
    console.log('The decrypted value is "' + decryptedValue + '"');
    const decryptedValue3 = await this.cryptoStore.get('data key3');
    console.log('The decrypted3 value is "' + decryptedValue3 + '"');
  }

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
