import { Directive, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MY_LINK_CLASS } from './my-link-class.token';

@Directive({
  selector: '[myLink]',
  standalone: true, 
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
export class MyLinkDirective {
  constructor() {
    const className = inject(MY_LINK_CLASS, {
      optional: true    })?? 'here';

    inject(RouterLinkActive).routerLinkActive = className;
  }

}
