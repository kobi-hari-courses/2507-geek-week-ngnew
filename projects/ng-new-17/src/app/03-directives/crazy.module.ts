import { NgModule } from "@angular/core";
import { HighlightDirective } from "./highlight.directive";
import { ImageTooltipDirective } from "./image-tooltip.directive";
import { CrazyButtonComponent } from "./crazy-button/crazy-button.component";

const declarables = [
    HighlightDirective, 
    ImageTooltipDirective, 
    CrazyButtonComponent
]

@NgModule({
    imports: [...declarables], 
    exports: [...declarables]
})
export class CrazyModule {}