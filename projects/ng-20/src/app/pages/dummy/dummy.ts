import { ChangeDetectorRef, Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-dummy',
  imports: [],
  templateUrl: './dummy.html',
  styleUrl: './dummy.scss'
})
export class Dummy {
  readonly x = signal(20);

  constructor() {
    setInterval(() => {
      this.x.update(v => v + 1);
      console.log('x changed to ', this.x());
    }, 2000);
  }

}
