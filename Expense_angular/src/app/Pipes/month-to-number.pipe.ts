import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monthToNumber'
})
export class MonthToNumberPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
