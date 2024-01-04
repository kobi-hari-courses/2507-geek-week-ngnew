import { Directive } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Directive({
    standalone: true, 
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
export class MyLinkDirective {
    constructor(private rla: RouterLinkActive) {
        rla.routerLinkActive = 'cur';
    }

}