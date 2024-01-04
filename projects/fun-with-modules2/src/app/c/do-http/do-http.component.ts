import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { MY_NUMBER } from '../../my-number.token';

@Component({
  selector: 'app-do-http',
  templateUrl: './do-http.component.html',
  styleUrl: './do-http.component.scss'
})
export class DoHttpComponent {
  myNum = inject(MY_NUMBER);

  constructor(private http: HttpClient) {
    console.log(this.http);
    console.log('C Component, my number is', this.myNum);

  }

}
