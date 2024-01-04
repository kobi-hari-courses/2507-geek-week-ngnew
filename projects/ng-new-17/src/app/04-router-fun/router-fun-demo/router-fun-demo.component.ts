import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-router-fun-demo',
  standalone: true,
  imports: [],
  templateUrl: './router-fun-demo.component.html',
  styleUrl: './router-fun-demo.component.scss'
})
export default class RouterFunDemoComponent {
  @Input()
  id!: number;



}
