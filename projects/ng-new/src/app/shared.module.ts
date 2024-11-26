import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HighlightDirective } from "./directives/highlight.directive";
import { ImageDirective } from "./directives/image-href.directive";
import { CrazyComponent } from "./components/crazy/crazy.component";

const allTheStuff = [
    CommonModule, 
    RouterModule, 
    HighlightDirective, 
    ImageDirective, 
    CrazyComponent
]

@NgModule({
    imports: [...allTheStuff],
    exports: [...allTheStuff]
})
export class SharedModule {}