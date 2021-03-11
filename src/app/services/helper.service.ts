import { Injectable } from '@angular/core';
import { Logger } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor(private logger: Logger) {}

  whoAmI() {
    this.logger.logger('Je suis un service');
  }
}
