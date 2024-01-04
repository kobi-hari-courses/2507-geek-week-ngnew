import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal, untracked } from '@angular/core';
import { BehaviorSubject, combineLatest, debounceTime, map } from 'rxjs';

@Component({
  selector: 'app-signal-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signal-demo.component.html',
  styleUrl: './signal-demo.component.scss'
})
export default class SignalDemoComponent {
  bs1 = signal('Manchester');
  bs2 = signal('City');  
  team = computed(() => `${this.bs1()} ${this.bs2()}`);

  ef = effect(() => {
    console.log(this.bs1(), this.bs2())
  });

  go() {
    this.bs1.set('Leads');
    this.bs2.set('United');
  }


  // bs1$ = new BehaviorSubject('Manchester');
  // bs2$ = new BehaviorSubject('City');

  // constructor() {
  //   const team$ = combineLatest([this.bs1$, this.bs2$]).pipe(
  //     map(([bs1, bs2]) => `${bs1} ${bs2}`), 
  //     debounceTime(0)
  //   );

  //   team$.subscribe(val => console.log(val));

  // }

  // go() {
  //   this.bs2$.next('United');
  //   this.bs1$.next('Leads');
  // }


}
