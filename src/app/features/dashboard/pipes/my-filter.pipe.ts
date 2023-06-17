import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myFilter',
  //Regarding the "pure" sttribute, 
  // (1) The default is 'true' this means "pure pipe"
  //     pure means that the pipe is minded to best performance,
  //     that means is does not do change-detection for complex types
  //     such as properties of objects. It will do it for primitive types.
  // (2) If you set the value to 'false' that means that
  //     performance will be lower but you get full change detection.
  //     This means if a value inside a complex object changes, then 
  //     the filter will refresh the calculation.
  //
  pure: false,
})
export class MyFilterPipe implements PipeTransform {
  transform(value: any[], filterTopic: string, filterInput: string): any {
    console.log(`The input value is '${filterInput}'`);
    if (value.length === 0 || filterInput === '') {
      return value;
    }

    let filteredResult = [];
    for (const item of value) {
      if (item[filterTopic] === filterInput) {
        filteredResult.push(item);
      }
    }
    return filteredResult;
  }
}
