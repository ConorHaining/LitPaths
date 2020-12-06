import { ElementRef } from '@angular/core';
import { FocusInputDirective } from './focus-input.directive';

describe('FocusInputDirective', () => {
  it('should create an instance', () => {
    const elementRef = new ElementRef({ focus: 'x' });
    const directive = new FocusInputDirective(elementRef);

    expect(directive).toBeTruthy();
  });

  it('should throw an error when element doesn\'t have focus', () => {
    const elementRef = new ElementRef({});

    expect(() => {new FocusInputDirective(elementRef);}).toThrow();
  });

  it('should not throw an error when element does have focus', () => {
    const elementRef = new ElementRef({ focus: 'x' });

    expect(() => {new FocusInputDirective(elementRef);}).not.toThrow();
  });

});
