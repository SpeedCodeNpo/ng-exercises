import { Component, inject } from '@angular/core';
import { DogObject } from 'src/app/core/doginfo.model';
import { DoginfoService } from 'src/app/core/doginfo.service';

@Component({
  selector: 'app-dog-dashboard',
  templateUrl: './dog-dashboard.component.html',
  styleUrls: ['./dog-dashboard.component.scss'],
})
export class DogDashboardComponent {
  dogInfoService = inject(DoginfoService);

  dogData = this.dogInfoService.dogList;

  trackByFn(index: number, item: DogObject) {
    return item;
  }

  ngOnInit() {
    console.log(this.dogData);
  }
}
