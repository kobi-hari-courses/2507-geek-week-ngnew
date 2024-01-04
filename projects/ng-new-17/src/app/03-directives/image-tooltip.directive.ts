import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: 'img',
  standalone: true
})
export class ImageTooltipDirective {

  @Input('src')
  @HostBinding('attr.title')
  title = 'Hello World';

  constructor() { }

}
