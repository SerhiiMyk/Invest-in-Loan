import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'term'
})
export class TermPipe implements PipeTransform {

  transform(value: number): string {
    const days = Math.round(value / (60 * 60 * 24))
    if (days / 30 < 1) {
      return `${ days } days`
    } else {
      return `${ Math.round(days / 30) } month ${ Math.round(days % 30) } days`
    }
  }
}
