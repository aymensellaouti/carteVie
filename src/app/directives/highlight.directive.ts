import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() in = 'yellow';
  @Input() out = 'red';
  @HostBinding('style.backgroundColor') bgc = 'red';
  constructor(private el: ElementRef) {
    console.log(this.el);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.bgc = this.in;
    this.el.nativeElement.innerHTML = 'in';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.bgc = this.out;
    this.el.nativeElement.innerHTML = 'out';
  }
}
