import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myMultiplier]',
})
export class MultiplierDirective {
  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  @Input('myMultiplier') set render(times: number) {
    this.viewContainer.clear;
    let statusFirst = false;
    let statusLast = false;
    let statusMiddle = false;

    this.viewContainer.clear();

    for (let i = 0; i < times; i++) {
      //console.log('Hello');
      switch (i) {
        case 0:
          statusFirst = true;
          statusMiddle = false;
          statusLast = false;
          break;
        case times - 1:
          statusFirst = false;
          statusMiddle = false;
          statusLast = true;
          break;
        default:
          statusFirst = false;
          statusMiddle = true;
          statusLast = false;
      }

      this.viewContainer.createEmbeddedView(this.templateRef, {
        index: i,
        first: statusFirst,
        middle: statusMiddle,
        last: statusLast,
      });
    }
  }
}
