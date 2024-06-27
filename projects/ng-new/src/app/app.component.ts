import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { MyService } from './my-service.service';
import { vatCalculator } from './taxes.util';
import { interval } from 'rxjs';
import { SharedModule } from './shared.module';
import { MyLinkDirective } from './directives/my-link.directive';
import { MY_LINK_CLASS } from './directives/my-link-class.token';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SharedModule, MyLinkDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss', 
  providers: [{provide: MY_LINK_CLASS, useValue: 'there'}],
})
export class AppComponent implements OnInit{
  readonly myService = inject(MyService);
  readonly calc = vatCalculator();
  readonly destroy = inject(DestroyRef);
  condition = false;

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
