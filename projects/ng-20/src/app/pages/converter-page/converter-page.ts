import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { CONVERTER_CONFIG } from '../../tokens/converter-config.token';

@Component({
  selector: 'app-converter-page',
  imports: [],
  templateUrl: './converter-page.html',
  styleUrl: './converter-page.scss', 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConverterPage {

  readonly config = inject(CONVERTER_CONFIG);

  readonly value = signal(this.loadStoredValue());

  readonly result = computed(() => this.config.calcFunc(this.value()));

  constructor() {
    effect(() => {
      localStorage.setItem('converter-value', `${this.value()}`)
    })
  }

  loadStoredValue() {
    const storedValue = Number(localStorage.getItem('converter-value'));
    return storedValue;

  }

}
