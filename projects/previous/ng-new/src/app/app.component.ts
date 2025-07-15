import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, Injector, OnInit, runInInjectionContext, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MyService } from './services/my.service';
import { MylinkDirective } from './directives/my-link.directive';
import { MY_LINK_CLASS } from './directives/my-link-class.token';
import { HighlightDirective } from './directives/highlight.directive';
import { SharedModule } from './shared.module';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss', 
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {provide: MY_LINK_CLASS, useValue: 'humus'}
  ]
})
export class AppComponent implements OnInit {
  showMaybe = true;
  readonly changeDetector = inject(ChangeDetectorRef);

  x = signal(50);


  readonly service = inject(MyService);
  readonly injector = inject(Injector);

  constructor() {
    console.log('Starting Stam');
    this.stam();
    console.log('Ending Stam');

    setTimeout(() => {
      this.x.set(100);
      console.log('changing x to ', this.x());
    }, 5000);
  }

  async stam() {
    console.log('We are in the first line of stam');
    const service = inject(MyService);
    await new Promise(res => setTimeout(res, 1000));
    console.log('Stam Service = ', service.id);
    console.log('We are in the last line of stam');
  }

  ngOnInit(): void {
    runInInjectionContext(this.injector, () => {
      const myService = inject(MyService);
      console.log(myService.id);
    });
  }

}
