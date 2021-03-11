import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]',
})
export class RainbowDirective {
  @HostBinding('style.color') color;
  @HostBinding('style.border-color') bc;
  constructor() {}

  @HostListener('keyup') onKeyUp() {
    this.bc = this.getRadnomColor();
    this.color = this.getRadnomColor();
  }

  private getRadnomColor(): string {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
}
