import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concatSpaced'
})
export class ConcatSpacedPipePipe implements PipeTransform {

  transform(value: String, second? : String): String {
    value = value.charAt(0).toUpperCase() + value.substr(1).toLowerCase();
    if(second.length > 0)
      second = second.charAt(0).toUpperCase() + second.substr(1).toLowerCase();
    return value + (second == "" ? "" : " " + second);
  }

}
