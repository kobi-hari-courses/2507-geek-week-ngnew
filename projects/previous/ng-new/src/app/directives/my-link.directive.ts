import { Directive, inject, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MY_LINK_CLASS } from './my-link-class.token';

@Directive({
  selector: '[myLink]', 
  hostDirectives: [
    RouterLinkActive,
    {
      directive: RouterLink,
      inputs: [
        'routerLink: myLink'
      ]
    }
  ]
})
export class MylinkDirective {
  @Input({required: true})
  myLink!: string;

  constructor() {
    const rla = inject(RouterLinkActive);
    const className = inject(MY_LINK_CLASS, {
      optional: true
    }) ?? 'here';


    rla.routerLinkActive = className;
  }

}
