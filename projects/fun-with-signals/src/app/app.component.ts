import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, effect, inject, Injector, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss', 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  readonly injector = inject(Injector);
  readonly x = signal(10);
  readonly y = signal(20);

  readonly sum = computed(() => this.x() + this.y());

  onChangeX() {
    this.x.update(v => v + 1);
  }

  onChangeY() {
    this.y.update(v => v + 1);
    this.y.update(v => v + 1);
    this.y.update(v => v + 1);
  }

  onStartToFollowSum() {
    effect(() => {
      console.log('in effect, sum:', this.sum());
    }, {
      injector: this.injector
    })
  }

  constructor() {
  }

}
