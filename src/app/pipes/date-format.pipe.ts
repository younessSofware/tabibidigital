  
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(input: string): string {
    return input.slice(0, 10) + ' ' + input.slice(11, 16);
  }

}