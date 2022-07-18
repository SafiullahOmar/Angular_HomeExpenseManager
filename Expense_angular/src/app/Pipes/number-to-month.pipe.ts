import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToMonth'
})
export class NumberToMonthPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
