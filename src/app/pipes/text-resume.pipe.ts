import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Resume'
})
export class TextResumePipe implements PipeTransform {

  transform(value: string, args: number): string {
    return value.slice(0, args ? args : 10) + (args < value.length ? '...' : '');
  }

}