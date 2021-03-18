import { Pipe, PipeTransform } from '@angular/core';
import { params } from 'src/app/generics';
@Pipe({
  name: 'defaultImage',
})
export class DefaultImagePipe implements PipeTransform {
  transform(path: string): string {
    if (path.trim().length) {
      return path;
    } else {
      return params.defaultImage;
    }
  }
}
