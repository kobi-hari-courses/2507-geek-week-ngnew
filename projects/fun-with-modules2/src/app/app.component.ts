import { Component, inject } from '@angular/core';
import { MY_NUMBER } from './my-number.token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  myNum = inject(MY_NUMBER);
  
  constructor() {
    console.log('APP COMPONENT, MY NUMBER = ', this.myNum);
  }
}
