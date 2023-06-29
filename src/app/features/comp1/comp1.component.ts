import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss'],
})
export class Comp1Component {
  initialCount = 0;
  count = signal<number>(this.initialCount);

  userInfo = signal({
    name: 'Danny',
    age: 27,
    email: 'my@email.com',
  });

  //FYI: If the default value of the ngModel property 'username' ia anythoing but
  //an empty string, then in the <input> tag in the html template the placeholder value will be ignored and the ngModel value of 'userbname' will be displpayed in the input box.
  username = '';

  consoleLogCount() {
    //In signal, the GET is activated by caliing the property name with () parenthesis.
    console.log(
      `Using signal GET to see it's value. Value of 'count' : ${this.count()}`
    );
  }

  resetCount() {
    this.count.set(this.initialCount);
  }

  incrementCount() {
    this.count.update((value) => {
      value++;
      return value;
    });
  }

  renameUser() {
    this.userInfo.mutate((v) => (v.name = this.username));
  }
}
