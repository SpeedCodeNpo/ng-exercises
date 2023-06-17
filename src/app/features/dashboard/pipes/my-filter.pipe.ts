import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';

@Pipe({
  name: 'myFilter',
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
