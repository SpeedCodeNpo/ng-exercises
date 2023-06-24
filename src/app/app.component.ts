import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngExercise';
  isDestroyComp1 = true;
  messageToHome = 'no-message';

  destroyComp1() {
    this.isDestroyComp1 = !this.isDestroyComp1;
    console.log(
      `[app.component] isDestroyComp1 updated, it's new value is now = ${this.isDestroyComp1}`
    );
  }

  toggleMessageToHome() {
    if (this.messageToHome === 'no-message') {
      this.messageToHome = 'Message updated !';
    } else {
      this.messageToHome = 'no-message';
    }
  }
}
