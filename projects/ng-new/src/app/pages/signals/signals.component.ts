import { ChangeDetectionStrategy, Component, computed, effect, signal } from '@angular/core';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { debounceTime } from 'rxjs';
import { StringSelectorComponent } from "../../components/string-selector/string-selector.component";

@Component({
    selector: 'app-signals',
    standalone: true,
    templateUrl: './signals.component.html',
    styleUrl: './signals.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [StringSelectorComponent]
})
export default class SignalsComponent {
  readonly favColor = signal('green');

  readonly x = signal(30);
  readonly y = signal(20);
  readonly sum = computed(() => this.x() + this.y());

  readonly colors = signal([
    'red',
    'green',
    'blue',
    'yellow',
    'purple',
    'orange',
    'pink',
    'brown',
    'black',
    'white',
  ]);

  readonly index = signal(0);
  readonly effectiveIndex = computed(() => this.index() % this.colors().length);
  readonly selectedColor = computed(() => this.colors()[this.effectiveIndex()]);

  selectColor(ind: number) {
    this.index.set(ind);
  }

  nextColor() {
    this.index.update((ind) => ind + 1);
  }

  async myTest() {
    this.x.set(40);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    this.y.set(11);
  }


  constructor(){ 
    const ind = Number(localStorage.getItem('color')??0);
    this.index.set(ind);

    effect(() => {
      localStorage.setItem('color', `${this.index()}`);
    });

    effect(() => {
      console.log('the sum is', this.sum());
    });

    toObservable(this.selectedColor).pipe(
      takeUntilDestroyed(), 
      debounceTime(2000)
    )
    .subscribe((color) => {
      console.log('Color changed to', color);
    });
  }
}
