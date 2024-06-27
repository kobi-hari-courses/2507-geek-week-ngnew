import { Component, input, model } from '@angular/core';

@Component({
  selector: 'app-string-selector',
  standalone: true,
  imports: [],
  templateUrl: './string-selector.component.html',
  styleUrl: './string-selector.component.scss'
})
export class StringSelectorComponent {
  readonly options = input.required<string[]>();

  readonly selected = model<string>();

  onClick(option: string) {
    this.selected.set(option);
  }

}
