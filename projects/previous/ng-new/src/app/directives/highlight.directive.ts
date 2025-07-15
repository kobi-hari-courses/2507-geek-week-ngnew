import { Directive, ElementRef, HostBinding } from "@angular/core";

@Directive({
    selector: '[highlight]'
})
export class HighlightDirective {
    @HostBinding('style.background')
    backgroundColor = 'pink';
}