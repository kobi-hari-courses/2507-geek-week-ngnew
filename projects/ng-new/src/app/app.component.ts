import { CommonModule } from '@angular/common';
import { Component, inject, Injector, OnInit, runInInjectionContext } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MyService } from './services/my.service';
import { MaybeComponent } from "./components/maybe/maybe.component";
import { MylinkDirective } from './directives/my-link.directive';
import { MY_LINK_CLASS } from './directives/my-link-class.token';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterModule, MylinkDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss', 
  providers: [
    {provide: MY_LINK_CLASS, useValue: 'humus'}
  ]
})
export class AppComponent implements OnInit {
  showMaybe = true;


  readonly service = inject(MyService);
  readonly injector = inject(Injector);

  constructor() {
    console.log('Starting Stam');
    this.stam();
    console.log('Ending Stam');
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
