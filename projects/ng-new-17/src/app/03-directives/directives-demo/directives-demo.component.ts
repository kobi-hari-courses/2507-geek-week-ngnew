import { Component } from '@angular/core';
import { HighlightDirective } from '../highlight.directive';
import { ImageTooltipDirective } from '../image-tooltip.directive';
import { CrazyButtonComponent } from '../crazy-button/crazy-button.component';
import { CrazyModule } from '../crazy.module';

@Component({
  selector: 'app-directives-demo',
  standalone: true,
  imports: [CrazyModule],
  templateUrl: './directives-demo.component.html',
  styleUrl: './directives-demo.component.scss'
})
export default class DirectivesDemoComponent {

}
