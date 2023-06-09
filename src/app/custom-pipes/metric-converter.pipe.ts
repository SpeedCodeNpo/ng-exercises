import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'metricConverter',
})
export class MetricConverterPipe implements PipeTransform {
  transform(value: number, targetUnit: string) {
    if (!targetUnit) {
      return value;
    }
    switch (targetUnit) {
      case 'km':
        return value * 1.609;
        break;

      case 'meter':
        return value * 1.609 * 1000;
        break;

      default:
        throw new Error(`The unit named "${targetUnit}" is not defined.`);
    }
  }
}
