import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'btcToUsd',
})
export class BtcToUsdPipe implements PipeTransform {
  transform(ammount: number, type: number = 0, ...args: number[]): number {
    if (type === 0) {
      return ammount * 55000;
    } else {
      return ammount / 55000;
    }
  }
}
