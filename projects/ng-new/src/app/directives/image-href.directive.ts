import { Directive, HostBinding, Input } from "@angular/core";

@Directive({
    selector: 'img'
})
export class ImageDirective {
    @HostBinding('attr.title')
    @Input()
    src!: string;
}