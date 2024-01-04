import { Component, InjectionToken, Injector, inject, runInInjectionContext } from '@angular/core';
import { MyService } from './my.service';
import { YourService } from './your.service';
import { NonInjectableService } from './non-injectable.service';
import { MY_NUMBER } from './my-number.token';
import { buildUrl } from './build-url.helper';

@Component({
  selector: 'app-inject-demo',
  standalone: true,
  imports: [],
  templateUrl: './inject-demo.component.html',
  styleUrl: './inject-demo.component.scss', 
  providers: [NonInjectableService]
})
export class InjectDemoComponent {
  service = inject(MyService);
  injector = inject(Injector);

  theUrl = buildUrl('courses');

  constructor() {
    console.log('The url is', this.theUrl);
  }

  go() {
    const injector = Injector.create({
      providers: [{
        provide: MyService,
        useClass: MyService
      }, {
        provide: MY_NUMBER, 
        useValue: 42
      }], 

      parent: this.injector
    });

    runInInjectionContext(injector, async () => {
      const thisWillNotFail = inject(MyService);
      const myNumber = inject(MY_NUMBER);
      console.log(myNumber);
      await Promise.resolve(42);
      // never never n ever use inject after await.
      // if you think about, DONT!
      // const thisWillFail = inject(MyService);
    });

    const myService1 = injector.get(MyService);
    const yourService = injector.get(YourService);
    const nonInjectable = injector.get(NonInjectableService);
    const value = injector.get(MY_NUMBER);

  }

}
