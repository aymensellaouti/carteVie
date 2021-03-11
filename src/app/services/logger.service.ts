import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Logger {
  logger(message: unknown) {
    console.log(message);
  }
}
