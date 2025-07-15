import { Directive, inject, Input, OnInit } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { ROUTER_ACTIVE_CLASS } from "../tokens/router-active-class.token";

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
export class MyLink implements OnInit {
    readonly rla = inject(RouterLinkActive);
    readonly className = inject(ROUTER_ACTIVE_CLASS, {optional: true});

    @Input({
        alias: 'myLink',
        required: true
    })
    url!: string;

    constructor() {
        console.log('Created instance of MyLink')
    }
    ngOnInit(): void {
        this.rla.routerLinkActive = this.className || 'po';
    }

}