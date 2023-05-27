import { Component, inject } from '@angular/core';
import { DataService } from './core/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  dataService: DataService;

  constructor() {
    this.dataService = inject(DataService);
  }

  ngOnInit() { }
}
