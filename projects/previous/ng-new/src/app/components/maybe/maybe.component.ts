import { Component, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';

@Component({
  selector: 'app-maybe',
  imports: [],
  templateUrl: './maybe.component.html',
  styleUrl: './maybe.component.scss'
})
export class MaybeComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
    interval(1000).pipe(
      takeUntilDestroyed()
    )
    .subscribe(i => console.log('maybe', i));

  }

}
