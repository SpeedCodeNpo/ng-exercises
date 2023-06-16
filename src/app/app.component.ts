import { Component, inject } from '@angular/core';
import { StudentDataService } from './core/services/student-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngExercise';
}
