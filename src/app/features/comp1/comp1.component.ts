import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss'],
})
export class Comp1Component {
  constructor() {
    effect(() =>
      console.log(
        `effect triggered for userInfo() signal change. \n New value is :   ${JSON.stringify(
          this.userInfo()
        )}`
      )
    );
    effect(() =>
      console.log(
        `effect triggered for tokens() computed-signal change.\n New value is : ${this.tokens()}`
      )
    );
  }

  initialCount = 1;
  count = signal<number>(this.initialCount);

  //The tokens signal will be updated when both these things happen:
  //   (1) Any time it is read
  //   AND
  //   (2) either userInfo.age OR count signals are updated
  tokens = computed(() => this.userInfo().age * this.count());

  //FYI: If the default value of the ngModel property 'username' ia anything but
  //an empty string, then in the <input> tag in the html template the placeholder value will be ignored and the ngModel value of 'userbname' will be displpayed in the input box.
  username = 'Danny';
  userage = 25;

  userInfo = signal({
    name: this.username,
    age: this.userage,
    email: 'my@email.com',
  });

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

  mutateUsername() {
    this.userInfo.mutate((v) => (v.name = this.username));
  }
  mutateUserage() {
    this.userInfo.mutate((v) => (v.age = this.userage));
  }
}
