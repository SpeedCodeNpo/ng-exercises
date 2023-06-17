import { Component, inject } from '@angular/core';
import { StudentDataService } from 'src/app/core/services/student-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  studentService = inject(StudentDataService);
  studentInfo = this.studentService.students;

  topicInput = '';
  topicValue = '';

  onClickAddStudent() {
    const newDemoStudent = {
      name: 'MyDemo',
      gender: 'male',
      module: '3',
      chapter: 'Test',
      isPayed: true,
    };

    this.studentInfo.unshift(newDemoStudent);
  }
}
