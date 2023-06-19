import { Component, inject } from '@angular/core';
import { last } from 'rxjs';
import { DogObject } from 'src/app/core/doginfo.model';
import { DoginfoService } from 'src/app/core/doginfo.service';

@Component({
  selector: 'app-dog-dashboard',
  templateUrl: './dog-dashboard.component.html',
  styleUrls: ['./dog-dashboard.component.scss'],
})
export class DogDashboardComponent {
  isListActive = false;

  dogInfoService = inject(DoginfoService);

  dogData = this.dogInfoService.dogList;

  ngOnInit() {
    console.log(this.dogData);
  }

  trackByFn(index: number, item: DogObject) {
    return item;
  }

  onToggleList() {
    this.isListActive = !this.isListActive;
    console.log(`isListActive = ${this.isListActive}`);
  }

  onAddDog() {
    const newDog = {
      ownerName: 'Testy',
      dogName: 'Demo',
      breed: 'Bulldogr',
      age: '9 years old',
    };

    this.dogData.push(newDog);
  }

  onChangeDogName() {
    const lastIndex = this.dogData.length - 1;
    this.dogData[lastIndex].dogName = 'Newname';
  }

  onSwitchFirstLast() {
    const firstItem = this.dogData[0];
    const lastIndex = this.dogData.length - 1;
    const lastItem = this.dogData[lastIndex];

    this.dogData[0] = lastItem;
    this.dogData[lastIndex] = firstItem;
  }
}
