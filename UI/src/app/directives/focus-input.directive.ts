import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[lpFocusInput]'
})
export class FocusInputDirective implements OnChanges {
  @Input('lpFocusInput') shouldFocus: boolean;

  constructor(private el: ElementRef) {
    if (!el.nativeElement.focus) {
      throw new Error('Element does not accept focus.');
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.shouldFocus.currentValue) {
      this.el.nativeElement.focus();
    }
  }

}
