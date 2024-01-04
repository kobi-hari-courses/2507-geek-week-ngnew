import { Directive, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlight]',
  standalone: true
})
export class HighlightDirective {

  @HostBinding('style.background-color')
  bg = 'lime'

  constructor() { 
  }

}
