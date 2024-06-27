import { Component, DestroyRef, OnDestroy, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyService } from './my-service.service';
import { calcVat, vatCalculator } from './taxes.util';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  readonly myService = inject(MyService);
  readonly calc = vatCalculator();
  readonly destroy = inject(DestroyRef);

  constructor() {
    console.log(this.myService);
    const b = inject(MyService);
    console.log('b', b);

    const sub = interval(1000).subscribe(() => {
      console.log('it is now', Date.now());
    });

    this.destroy.onDestroy(() => sub.unsubscribe());

  }
  ngOnInit(): void {
  }

  onCalc(amount: number) {
    console.log('The tax to pay is', this.calc(amount));
  }

}
