import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgular'
})
export class ImgularPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
