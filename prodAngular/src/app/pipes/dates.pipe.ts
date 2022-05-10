import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dates'
})
export class DatesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
